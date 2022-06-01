1 What is Next.js?
2 Client side and server side?
3 Data fetching?

- server side

* getServerSideProps(context, props, notFound,redirect)

  - Kết xuất dữ liệu phía server
  - Dữ liệu sẽ được update khi chạy
  - Dùng cho những dữ liệu động cần cập nhật

* getStaticPaths(path, fallback)

- Xác định các danh sách đường dẫn được tạo tĩnh
- getStaticPaths sẽ quyết định xem những page nào sẽ được sinh ra. Đường dẫn của các page được sinh ra sẽ nằm trong tập hợp paths được trả về trong hàm getStaticPaths.

* getStaticProps (context, props, revalidate, notFound, redirect)

- Kết xuất dữ liệu dạng tĩnh phía server

- client side

* use swr

4 style css

- module css
- tailwind css
- sass
- styled-jsx

5 layout & Per-Page Layouts
6 Image from next/image

- Improved Performance: Always serve correctly sized image for each device, using modern image formats
- Visual Stability: Prevent Cumulative Layout Shift automatically
- Faster Page Loads: Images are only loaded when they enter the viewport, with optional blur-up placeholders
- Asset Flexibility: On-demand image resizing, even for images stored on remote servers

7 Dynamic Routes

- path to file
- next/link
- next/router

8 other features

- next/script
- next/head
  ...
