rm -r build
gsutil rm gs://www.wsb-viz.com/**
npm run build
gsutil cp -r build/* gs://www.wsb-viz.com 
