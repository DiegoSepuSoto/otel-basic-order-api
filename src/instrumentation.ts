import { NodeSDK } from "@opentelemetry/sdk-node";
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-grpc';

const sdk = new NodeSDK({
    traceExporter: new OTLPTraceExporter(),
    instrumentations: [new HttpInstrumentation()],
});

sdk.start();