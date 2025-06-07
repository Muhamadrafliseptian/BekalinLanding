import React from "react";
import { Collapse, Typography, Row, Col } from "antd";

const { Title, Text, Paragraph } = Typography;
const { Panel } = Collapse;

const faqData = [
  {
    question: "Apakah alamat Lunch dan Dinner bisa berbeda/diubah setiap hari?",
    answer: `Ya, untuk pengiriman hari Senin hingga Jumat, alamat pengantaran makan siang dan makan malam dapat berbeda, karena keduanya dikirim dalam dua sesi terpisah. Jika Anda memiliki jadwal pengiriman harian dengan alamat berbeda, silakan informasikan kepada admin maksimal H-1 sebelum pukul 19.00 WIB untuk penyesuaian jadwal.`,
  },
  {
    question: "Bekal-in bisa mengantar ke mana saja?",
    answer:
      "Layanan pengantaran kami mencakup seluruh area Jakarta Raya. Anda dapat menginformasikan nama kecamatan agar kami bantu cek ketersediaan layanan di wilayah Anda.",
  },
  {
    question: "Paket apa saja yang tersedia?",
    answer:
      "Kami menyediakan paket makan siang dan makan malam, dengan pilihan langganan mingguan maupun bulanan. Pengiriman dilakukan setiap hari kerja, yaitu Senin hingga Jumat.",
  },
  {
    question: "Pengiriman Lunch & Dinner dilakukan pukul berapa?",
    answer:
      "Untuk pengiriman Senin sampai Jumat, makan dikirim dalam dua sesi terpisah:\nLunch: antara pukul 09.00 – 12.30 WIB Dinner: antara pukul 15.00 – 18.30 WIB",
  },
  {
    question: "Apakah ada pengiriman saat tanggal merah?",
    answer:
      "Kami tetap melakukan pengiriman pada tanggal merah seperti biasa. Apabila terdapat perubahan jadwal atau libur operasional, kami akan memberikan pemberitahuan sebelumnya.",
  },
  {
    question: "Apakah bisa request pengantaran di jam tertentu?",
    answer:
      "Mohon maaf, saat ini kami belum dapat melayani permintaan pengantaran di jam tertentu. Rute pengiriman dibuat berdasarkan efisiensi. Namun, kami memastikan pengantaran dilakukan dalam rentang waktu yang telah ditentukan:\nLunch: pukul 09.00 – 12.30 WIB\nDinner: pukul 15.00 – 18.30 WIB",
  },
];

const Faq = () => {
  return (
    <div
      className="background-secondary"
      id="faq"
      style={{
        padding: "60px 20px",
      }}
    >
      <div
        className="background-third"
        style={{ borderRadius: 30, padding: 20 }}
      >
        <Row justify="center">
          <Col xs={24} md={24} lg={22}>
            <Title
              level={2}
              style={{
                textAlign: "center",
                marginBottom: 40,
                fontWeight: "bold",
                color: "#0B51D5",
              }}
              data-aos="fade-up"
            >
              FAQ
            </Title>
            <Collapse
              accordion
              bordered={false}
              expandIconPosition="end"
              style={{ background: "transparent" }}
              data-aos="fade-right"
            >
              {faqData.map((item, index) => (
                <Panel
                  header={
                    <Text strong style={{ color: "#E64420" }}>
                      Q: {item.question}
                    </Text>
                  }
                  key={index}
                  style={{
                    marginBottom: 16,
                    borderRadius: 8,
                    border: "none",
                  }}
                  className="background-secondary"
                >
                  <Paragraph style={{ margin: 0, color: "#000" }}>
                    <Text strong style={{ color: "#0B51D5" }}>
                      A:{" "}
                      {item.answer.split("\n").map((line, i) => (
                        <span key={i}>{line}</span>
                      ))}
                    </Text>
                  </Paragraph>
                </Panel>
              ))}
            </Collapse>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Faq;
