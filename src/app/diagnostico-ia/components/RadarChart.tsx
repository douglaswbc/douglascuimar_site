"use client";

import {
  RadarChart as RechartsRadar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";
import type { DimensionScore } from "@/lib/scan-engine";

interface RadarChartProps {
  dimensions: DimensionScore[];
}

export function RadarChart({ dimensions }: RadarChartProps) {
  const data = dimensions.map((d) => ({
    dimension: d.label,
    score: d.percentage,
    fullMark: 100,
  }));

  return (
    <div style={{ width: "100%", maxWidth: 420, aspectRatio: 1, margin: "0 auto" }}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsRadar data={data} cx="50%" cy="50%" outerRadius="70%">
          <PolarGrid stroke="#e2e8f0" />
          <PolarAngleAxis
            dataKey="dimension"
            tick={{ fontSize: 10, fontWeight: 700, fill: "#1e293b" }}
          />
          <PolarRadiusAxis
            angle={90}
            domain={[0, 100]}
            tick={{ fontSize: 9, fill: "#94a3b8" }}
            tickCount={5}
            stroke="transparent"
          />
          <Radar
            name="Maturidade"
            dataKey="score"
            stroke="#10b981"
            fill="#10b981"
            fillOpacity={0.25}
            strokeWidth={2}
          />
        </RechartsRadar>
      </ResponsiveContainer>
    </div>
  );
}
