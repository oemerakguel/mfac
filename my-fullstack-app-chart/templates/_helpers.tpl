{{/*
Return the full name of the chart release
*/}}
{{- define "my-fullstack-app-chart.fullname" -}}
{{- printf "%s-%s" .Release.Name .Chart.Name | trunc 63 | trimSuffix "-" -}}
{{- end }}

{{/*
Return the service account name
*/}}
{{- define "my-fullstack-app-chart.serviceAccountName" -}}
{{- if .Values.serviceAccount.name }}
{{- .Values.serviceAccount.name }}
{{- else }}
{{- printf "%s-%s" .Release.Name "serviceaccount" }}
{{- end }}
{{- end }}

{{/*
Return common labels
*/}}
{{- define "my-fullstack-app-chart.labels" -}}
app.kubernetes.io/name: {{ include "my-fullstack-app-chart.name" . }}
helm.sh/chart: {{ include "my-fullstack-app-chart.chart" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
{{- end }}

{{/*
Return chart name
*/}}
{{- define "my-fullstack-app-chart.name" -}}
{{- .Chart.Name }}
{{- end }}

{{/*
Return chart version
*/}}
{{- define "my-fullstack-app-chart.chart" -}}
{{- printf "%s-%s" .Chart.Name .Chart.Version }}
{{- end }}
