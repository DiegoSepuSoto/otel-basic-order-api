build:
	@docker build . -t diegosepusoto/otel-basic-order-api:local

start:
	@docker run --platform linux/amd64 \
	-d \
	-p 8081:8081 \
	--name otel-basic-order-api \
	-e CUSTOMER_API_HOST=http://host.docker.internal:8080 \
	-e OTEL_TRACES_EXPORTER=otlp \
	-e OTEL_EXPORTER_OTLP_ENDPOINT=http://host.docker.internal:4317 \
	-e OTEL_RESOURCE_ATTRIBUTES=service.name=order-api,service.version=1.0,deployment.environment=local \
	diegosepusoto/otel-basic-order-api:local

stop:
	@docker rm -f otel-basic-order-api

.PHONY: build start