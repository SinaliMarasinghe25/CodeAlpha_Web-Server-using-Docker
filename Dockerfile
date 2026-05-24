# Step 1: Start from the official Nginx image
# This is a pre-built Linux system with Nginx already installed
FROM nginx:latest

# Step 2: Remove the default Nginx welcome page
# We don't want Nginx's default page, we want ours
RUN rm -rf /usr/share/nginx/html/*

# Step 3: Copy our website files into Nginx's serving folder
# Left side = our files, Right side = where Nginx looks for files
COPY website/ /usr/share/nginx/html/

# Step 4: Copy our custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Step 5: Tell Docker this container uses port 80
EXPOSE 80

# Step 6: Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]