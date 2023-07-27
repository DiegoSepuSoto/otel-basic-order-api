import * as opentelemetry from "@opentelemetry/sdk-node";
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
const { OTLPTraceExporter } =  require('@opentelemetry/exporter-trace-otlp-grpc');
import { OTLPMetricExporter } from "@opentelemetry/exporter-metrics-otlp-proto";
import { PeriodicExportingMetricReader } from "@opentelemetry/sdk-metrics";

const sdk = new opentelemetry.NodeSDK({
    traceExporter: new OTLPTraceExporter(),
    metricReader: new PeriodicExportingMetricReader({
        exporter: new OTLPMetricExporter(),
    }),
    instrumentations: [new HttpInstrumentation()],
});
sdk.start();