// Dữ liệu đánh giá của khách hàng
const testimonialsData = {
  title: 'Nhận xét của khách hàng',
  description:
    'Halu ngày càng có sức lan tỏa mạnh mẽ đến mọi đối tác, khách hàng. Halu đã làm được một việc lớn, đó là xây dựng được thương hiệu, tạo được uy tín.',
  testimonials: [
    {
      id: 1,
      name: 'Anh Trần Quang Hiệp',
      role: 'Khách hàng',
      image: './assets/img/testimo1.png',
      feedback:
        'Dịch vụ tư vấn của Halu là một dịch vụ rất hữu ích và sẽ hỗ trợ các doanh nghiệp cũng như khách hàng tìm được các thiết bị phù hợp nhất với nhu cầu và ngân sách của mình. Tôi rất hài lòng. Xin cảm ơn Halu!',
    },
    {
      id: 2,
      name: 'Anh Phạm Thế Lợi',
      role: 'CEO tập đoàn Hoa Kỳ',
      image: './assets/img/testimo2.png',
      feedback:
        'Tôi đã từng sử dụng dịch vụ bảo hiểm của Halu. Nhân viên công ty đã giúp chúng tôi nắm bắt các chế độ bảo hiểm trong thời gian ngắn , tôi rất hài lòng. Nhất định tôi sẽ giới thiệu Halu tới mọi người.',
    },
    {
      id: 3,
      name: 'Anh Trần Thanh Tùng',
      role: 'CEO tập đoàn Facebook Việt Nam',
      image: './assets/img/testimo3.png',
      feedback:
        'Halu ngày càng có sức lan tỏa mạnh mẽ đến mọi đối tác, khách hàng. Tôi nghĩ, Halu đã làm được một việc lớn, đó là xây dựng được thương hiệu, tạo được uy tín với khách hàng. Điều này thật tuyệt vời!',
    },
    {
      id: 4,
      name: 'Chị Nguyễn Mỹ Linh',
      role: 'Kế toán CTCP TM Việt Nam',
      image: './assets/img/testimo4.png',
      feedback:
        'Dịch vụ tư vấn của Halu là một dịch vụ rất hữu ích và sẽ hỗ trợ các doanh nghiệp cũng như khách hàng tìm được các thiết bị phù hợp nhất với nhu cầu và ngân sách của mình. Tôi rất hài lòng. Xin cảm ơn Halu!',
    },
  ],
};

// Hàm khởi tạo slider cho testimonials
function initTestimonialsSlider() {
  const container = $('#section_testimonials');
  if (container.length) {
    let xxs_item = container.attr('data-xss-items');
    let xs_item = container.attr('data-xs-items');
    let md_item = container.attr('data-md-items');
    let lg_item = container.attr('data-lg-items');
    let sm_item = container.attr('data-sm-items');
    let margin = container.attr('data-margin');
    let dots = container.attr('data-dots');
    let id_tiny = container.attr('data-target-id');

    const slider = tns({
      container: `#${id_tiny}`,
      loop: true,
      items: lg_item,
      slideBy: 'page',
      nav: false,
      autoplay: false,
      speed: 400,
      autoplayButtonOutput: false,
      mouseDrag: true,
      gutter: margin,
      rewind: true,
      lazyload: true,
      responsive: {
        0: {
          items: Number(xxs_item) || 1,
        },
        543: {
          items: Number(xs_item),
        },
        768: {
          items: Number(sm_item),
        },
        992: {
          items: Number(md_item),
        },
        1200: {
          items: Number(lg_item),
        },
      },
    });
  }
}

// Hàm để render testimonials
function renderTestimonials() {
  const testimonialContainer = document.getElementById('section_testimonials');
  if (!testimonialContainer) return;

  // Xóa nội dung hiện tại
  testimonialContainer.innerHTML = '';

  // Render từng testimonial
  testimonialsData.testimonials.forEach((testimonial) => {
    const testimonialElement = document.createElement('div');
    testimonialElement.className = 'item';
    testimonialElement.innerHTML = `
      <div class="htesti-item text-center">
        <div class="htesti-img">
          <img
            src="./assets/svg/loading.svg"
            data-lazyload="${testimonial.image}"
            alt="${testimonial.name}"
          />
        </div>
        <div class="htesti-desc">
          "${testimonial.feedback}"
        </div>
        <div class="htesti-title">${testimonial.name}</div>
        <div class="htesti-role">${testimonial.role}</div>
      </div>
    `;

    testimonialContainer.appendChild(testimonialElement);
  });

  // Khởi tạo lại slider sau khi render xong
  setTimeout(() => {
    // Khởi tạo lazy loading cho hình ảnh mới
    if (typeof awe_lazyloadImage === 'function') {
      awe_lazyloadImage();
    }
    
    // Khởi tạo slider
    initTestimonialsSlider();
  }, 100);
}

// Hàm để cập nhật title và description
function updateTestimonialsHeader() {
  const titleElement = document.querySelector('.awe-section-6 .title-text h2');
  const descriptionElement = document.querySelector(
    '.awe-section-6 .title-text p',
  );

  if (titleElement) {
    titleElement.textContent = testimonialsData.title;
  }

  if (descriptionElement) {
    descriptionElement.textContent = testimonialsData.description;
  }
}

// Khởi tạo khi DOM được load
document.addEventListener('DOMContentLoaded', function () {
  updateTestimonialsHeader();
  renderTestimonials();
});
