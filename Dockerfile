FROM nginx:alpine

# Copy static files to nginx html directory
COPY . /usr/share/nginx/html/

# Copy custom nginx config if needed (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 (will be mapped to 8888 in docker-compose)
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]