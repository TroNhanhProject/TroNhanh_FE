import React, { useState, useEffect, useCallback } from "react";
import { Modal, Tag, Space, Image, Spin, message, Button, Collapse, Divider, Row, Col, Card, Progress, Typography, List } from "antd";
import { UserOutlined, EnvironmentOutlined, DollarOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { getBoardingHouseDetailAdmin } from "../../../services/accommodationAdminService";
import { analyzeBoardingHouseAI } from "../../../services/accommodationAdminService";

const statusColors = {
  pending: "blue",
  approved: "green",
  reported: "red",
  deleted: "volcano",
  rejected: "magenta",
};

const PostDetailModal = ({ post, onClose }) => {
  const [detailData, setDetailData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState(null);
  const [aiLoading, setAiLoading] = useState(false);

  const fetchDetailData = useCallback(async () => {
    if (!post || !post._id) return;

    setLoading(true);
    try {
      const data = await getBoardingHouseDetailAdmin(post._id);
      setDetailData(data);
    } catch (error) {
      message.error("Failed to fetch accommodation details");
      console.error("Error fetching detail:", error);
    } finally {
      setLoading(false);
    }
  }, [post]);

  useEffect(() => {
    fetchDetailData();
  }, [fetchDetailData]);

  const handleAiCheck = async () => {
    if (!post || !post._id) return;
    setAiLoading(true);
    try {
      const resp = await analyzeBoardingHouseAI(post._id);
      setAiAnalysis(resp.data || resp);
  console.log('AI raw:', resp.data || resp);
      message.success('AI analysis completed');
    } catch (err) {
      console.error('AI analysis failed', err);
      message.error('AI analysis failed');
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <Modal
      open={!!post}
      onCancel={onClose}
      footer={null}
      title={post ? post.title : ""}
      width={800}
    >
      {loading ? (
        <div style={{ textAlign: "center", padding: "40px" }}>
          <Spin size="large" />
        </div>
      ) : (
        detailData && (
          <div>
            <Space direction="vertical" size="middle" style={{ width: "100%" }}>
              <div style={{ display: "flex", gap: "40px", alignItems: "flex-start" }}>
                {/* Basic Information */}
                <div style={{ flex: 1 }}>
                  <h4>Basic Information</h4>
                  <div>
                    <b>Title:</b> {detailData.title}
                  </div>
                  <div>
                    <b>Owner:</b> <UserOutlined /> {detailData.ownerId?.name || "N/A"}
                    {detailData.ownerId?.email && ` (${detailData.ownerId.email})`}
                  </div>
                  <div>
                    <b>Status:</b>{" "}
                    <Tag color={statusColors[detailData.approvedStatus || detailData.status]}>
                      {(detailData.approvedStatus || detailData.status || "unknown").charAt(0).toUpperCase() +
                        (detailData.approvedStatus || detailData.status || "unknown").slice(1)}
                    </Tag>
                  </div>
                  <div>
                    <b>Date Posted:</b> {dayjs(detailData.createdAt).format("YYYY-MM-DD HH:mm")}
                  </div>
                  {detailData.approvedAt && (
                    <div>
                      <b>Approved At:</b> {dayjs(detailData.approvedAt).format("YYYY-MM-DD HH:mm")}
                    </div>
                  )}
                  {detailData.rejectedReason && (
                    <div>
                      <b>Rejected Reason:</b> {detailData.rejectedReason}
                    </div>
                  )}
                </div>

                {/* AI Check button moved below photos for better layout */}

                {/* Property Details */}
                <div style={{ flex: 1 }}>
                  <h4>Property Details</h4>
                  <div>
                    <b>Price:</b> <DollarOutlined /> {detailData.price ? `$${detailData.price}` : "N/A"}
                  </div>
                  <div>
                    <b>Location:</b> <EnvironmentOutlined /> {
                      detailData.location ?
                        (typeof detailData.location === 'object' ?
                          `${detailData.location.street || ''}, ${detailData.location.district || ''}`.trim().replace(/^,\s*|,\s*$/g, '') :
                          detailData.location
                        ) :
                        "N/A"
                    }
                  </div>
                  {detailData.description && (
                    <div>
                      <b>Description:</b>
                      <div style={{ marginTop: 8, padding: 10, background: "#f5f5f5", borderRadius: 4 }}>
                        {detailData.description}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Photos */}
              {detailData && (
                <>
                  <div>
                    <h4>Photos ({detailData.photos?.length || 0})</h4>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {detailData.photos && detailData.photos.length > 0 ? (
                        detailData.photos.map((photo, index) => (
                          <Image
                            key={index}
                            width={120}
                            height={120}
                            src={`http://localhost:5000${photo}`}
                            style={{ objectFit: "cover", borderRadius: 4 }}
                            placeholder={
                              <div style={{
                                width: 120,
                                height: 120,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                background: "#f0f0f0"
                              }}>
                                Loading...
                              </div>
                            }
                          />
                        ))
                      ) : (
                        <Image
                          width={120}
                          height={120}
                          src="/image/default-image.jpg"
                          style={{ objectFit: "cover", borderRadius: 4 }}
                          placeholder={
                            <div style={{
                              width: 120,
                              height: 120,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              background: "#f0f0f0"
                            }}>
                              No Image
                            </div>
                          }
                        />
                      )}
                    </div>
                  </div>
                </>
              )}

              {/* AI Check button placed under photos */}
              <div style={{ marginTop: 12 }}>
                <Button type="primary" onClick={handleAiCheck} loading={aiLoading}>AI Check</Button>
                <span style={{ color: '#888', marginLeft: 10 }}>Nhấn để chạy phân tích AI (text + hình ảnh)</span>
              </div>

              {/* AI Analysis Results */}
              {aiAnalysis && (
                <div style={{ marginTop: 16 }}>
                  <Divider />
                  <h4>AI Analysis</h4>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
                    <div style={{ minWidth: 160 }}>
                      <div style={{ fontSize: 14, fontWeight: 600 }}>Suspicion score</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <Progress percent={aiAnalysis.suspicionScore ?? 0} size="small" status={aiAnalysis.suspicionScore >= 70 ? 'exception' : aiAnalysis.suspicionScore >= 40 ? 'normal' : 'normal'} />
                        <Tag color={aiAnalysis.risk === 'High' ? 'red' : aiAnalysis.risk === 'Medium' ? 'orange' : 'green'} style={{ fontWeight: 600 }}>{aiAnalysis.risk}</Tag>
                      </div>
                    </div>
                    <div>
                      {aiAnalysis.issues && aiAnalysis.issues.length > 0 ? (
                        <div>
                          <div style={{ fontSize: 14, fontWeight: 600 }}>Issues</div>
                          <div style={{ marginTop: 6 }}>
                            {aiAnalysis.issues.map((it, idx) => (
                              <Tag key={idx} color="gold" style={{ marginBottom: 6 }}>{it.type}: {it.detail}</Tag>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div style={{ color: '#888' }}>No issues detected by heuristics.</div>
                      )}
                    </div>
                  </div>
                  {aiAnalysis.issues && aiAnalysis.issues.length > 0 ? (
                    <div style={{ marginBottom: 8 }}>
                      <b>Issues:</b>
                      <ul>
                        {aiAnalysis.issues.map((it, idx) => (
                          <li key={idx}>{it.type}: {it.detail}</li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div style={{ marginBottom: 8 }}>No issues detected by heuristics.</div>
                  )}

                  {aiAnalysis.imageAnalysis && aiAnalysis.imageAnalysis.length > 0 && (
                    <div style={{ marginBottom: 8 }}>
                      <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>Photos & hashes</div>
                      <Row gutter={[12, 12]}>
                        {aiAnalysis.imageAnalysis.map((img, i) => (
                          <Col key={i} xs={24} sm={12} md={8} lg={6}>
                            <Card size="small" bodyStyle={{ padding: 8 }}>
                              <Image src={`http://localhost:5000${img.photo}`} width={'100%'} height={120} style={{ objectFit: 'cover', borderRadius: 4 }} />
                              <div style={{ marginTop: 8 }}>
                                <Typography.Text code copyable style={{ display: 'block' }}>{img.hex || img.error || 'n/a'}</Typography.Text>
                                <div style={{ fontSize: 12, color: '#666', marginTop: 6, wordBreak: 'break-all' }}>{img.photo}</div>
                              </div>
                            </Card>
                          </Col>
                        ))}
                      </Row>
                    </div>
                  )}

                  {aiAnalysis.llm && (
                    <div style={{ marginTop: 8 }}>
                      <b>LLM suggestion:</b>
                      <div style={{ marginTop: 6, padding: 10, background: '#fffbe6', borderRadius: 4 }}>{aiAnalysis.llm}</div>
                    </div>
                  )}

                  {aiAnalysis.duplicates && aiAnalysis.duplicates.length > 0 && (
                    <div style={{ marginTop: 10 }}>
                      <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>Detected duplicate image pairs</div>
                      <List
                        dataSource={aiAnalysis.duplicates}
                        renderItem={(d) => (
                          <List.Item>
                            <List.Item.Meta
                              avatar={<Image src={`http://localhost:5000${d.a}`} width={80} height={60} style={{ objectFit: 'cover' }} />}
                              title={<div style={{ fontSize: 13 }}>{d.a.split('/').pop()} ⇄ {d.b.split('/').pop()}</div>}
                              description={<div>Similarity: <b>{Math.round(d.similarity * 100) / 100}</b></div>}
                            />
                            <div style={{ display: 'flex', gap: 8 }}>
                              <Image src={`http://localhost:5000${d.b}`} width={80} height={60} style={{ objectFit: 'cover' }} />
                            </div>
                          </List.Item>
                        )}
                      />
                    </div>
                  )}
                </div>
              )}

              {/* Additional Information */}
              <div>
                <h4>Additional Information</h4>
                <div>
                  <b>Is Approved:</b> {detailData.isApproved ? "Yes" : "No"}
                </div>
                <div>
                  <b>Created:</b> {dayjs(detailData.createdAt).format("YYYY-MM-DD HH:mm:ss")}
                </div>
                <div>
                  <b>Last Updated:</b> {dayjs(detailData.updatedAt).format("YYYY-MM-DD HH:mm:ss")}
                </div>
              </div>
            </Space>
          </div>
        )
      )}
    </Modal>
  );
};

export default PostDetailModal;