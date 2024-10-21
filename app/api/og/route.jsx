import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "400px",
          width: "800px",
          backgroundColor: "#1e293b", // Dark background
          color: "white", // Text color
        }}
      >
        <p
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            marginBottom: "10px",
            letterSpacing: "1px",
          }}
        >
          Nafis Abrar Ahmed Adaan
        </p>
        <p
          style={{
            fontSize: "20px",
            fontWeight: "600",
            letterSpacing: "0.5px",
            backgroundColor: "#0ea5e9", // Accent color for the role text
            padding: "10px 20px",
            borderRadius: "5px",
          }}
        >
          Front-End Developer
        </p>
      </div>
    ),
    {
      width: 800,
      height: 400,
    }
  );
}
