// Make sure to register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

//Navbar Disappear Animation for Selected Sections
let navbar = $(".navbar");

// ScrollTrigger oluşturuyoruz
ScrollTrigger.create({
  trigger: ".section-screen",
  start: "top 10%", // başlangıç noktası
  end: "bottom center", // bitiş noktası
  onEnter: function () {
    // element viewport'a girdiğinde çalışacak fonksiyon
    gsap.to(navbar, { yPercent: -200, duration: 0.2 });
  },
  onLeave: function () {
    // element viewport'tan çıktığında çalışacak fonksiyon
    gsap.to(navbar, { yPercent: 0, duration: 0.2 });
  },
  onEnterBack: function () {
    // element viewport'a geri döndüğünde çalışacak fonksiyon
    gsap.to(navbar, { yPercent: -200, duration: 0.2 });
  },
  onLeaveBack: function () {
    // element viewport'tan geri çıktığında çalışacak fonksiyon
    gsap.to(navbar, { yPercent: 0, duration: 0.2 });
  }
});

ScrollTrigger.create({
  trigger: ".process_scroll-area",
  start: "top top",
  end: "bottom 95%",
  onEnter: function () {
    gsap.to(navbar, { yPercent: -200, duration: 0.2 });
  },
  onLeave: function () {
    gsap.to(navbar, { yPercent: 0, duration: 0.2 });
  },
  onEnterBack: function () {
    gsap.to(navbar, { yPercent: -200, duration: 0.2 });
  },
  onLeaveBack: function () {
    gsap.to(navbar, { yPercent: 0, duration: 0.2 });
  }
});

//Feature Cards
$(document).ready(function () {
  $(".features-card-layout.is-5").hover(
    function () {
      $(".graph-column, .graph-icon").addClass("is-hover");
    },
    function () {
      $(".graph-column, .graph-icon").removeClass("is-hover");
    }
  );
});

//Feature card -3 hover
$(document).ready(function () {
  // Her hover animasyonunda kullanılacak renk değerleri
  let hoverBgColor = "@swatch_d3f059bf";
  let hoverColor = "@swatch_55733e7c";

  // Her feature-3-social div'ının orijinal renk değerlerini saklarız
  let originalBgColors = [];
  let originalColors = [];

  $(".campaign-edit_lower.is-2 .feature-3-social").each(function () {
    originalBgColors.push($(this).css("background-color"));
    originalColors.push($(this).css("color"));
  });

  $(".campaign-edit_lower.is-2").hover(function () {
    // Hover'a girdiğinde
    gsap
      .timeline()
      .to(".campaign-edit_lower.is-2 .feature-3-social", {
        backgroundColor: hoverBgColor,
        color: hoverColor,
        stagger: 0.2,
        duration: 0.2
      })
      .pause(0.3)
      .to(".campaign-edit_lower.is-2 .feature-3-social", {
        backgroundColor: function (i) {
          return originalBgColors[i];
        },
        color: function (i) {
          return originalColors[i];
        },
        stagger: 0.2,
        duration: 0.2
      });
  });
});

//Tab component
$(document).ready(function () {
  var index = 0;
  var totalButtons = $(".tab-button").length;
  var intervalId;

  function activateTab() {
    // Tüm elementlerden is-active class'ını kaldır
    $(".tab-button, .tab-left_bottom-element, .tab-img").removeClass(
      "is-active"
    );

    // İlgili buton ve elementlere is-active class'ını ekle
    $(".tab-button").eq(index).addClass("is-active");
    $(".tab-left_bottom-element").eq(index).addClass("is-active");
    $(".tab-img").eq(index).addClass("is-active");

    // Sonraki butona geçmek için indexi güncelle
    index = (index + 1) %
    totalButtons; // index'i totalButtons ile mod alarak index'i sıfıra döndürürüz
  }

  // Her bir tab-button'a tıklama event'i ekle
  $(".tab-button").on("click", function () {
    // Kullanıcının bir düğmeye tıklaması durumunda otomatik geçişi durdur
    clearInterval(intervalId);

    index = $(this).index();
    activateTab();
  });

  // GSAP ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    trigger: ".process-card.is-5",
    start: "center center", // trigger öğesi tam ortadayken
    onEnter: function () {
      // trigger öğesi görünür olduğunda
      intervalId = setInterval(activateTab,
      3000); // fonksiyonu her 2 saniyede bir çalıştır
    },
    onLeave: function () {
      // trigger öğesi görünmez olduğunda
      clearInterval(intervalId); // fonksiyonu durdur
    },
    onEnterBack: function () {
      // trigger öğesi tekrar görünür olduğunda (geri gelindiğinde)
      intervalId = setInterval(activateTab, 3000); // fonksiyonu tekrar başlat
    },
    onLeaveBack: function () {
      // trigger öğesi tekrar görünmez olduğunda (geri giderken)
      clearInterval(intervalId); // fonksiyonu tekrar durdur
    }
  });
});

//Step Functions
//Step 1
ScrollTrigger.create({
  trigger: ".process-inside-lower",
  start: "top center",
  //markers: true,
  onEnter: () => {
    // gsap.from(".select-a-platform_item", {
    //   opacity: 0,
    //   yPercent: 20,
    //   stagger: 0.2,
    //   duration: 1,
    //   ease: "power1.out"
    // });
  }
});

//Step 2
$(".step-2-row-1_content").click(function () {
  $(".step-2-row-1_content.is-active").removeClass("is-active");
  $(this).addClass("is-active");
});

//Step 3
$(".select-item").click(function () {
  $(this).css("display", "none");
});

//Step 4

$(".step-4-item").click(function () {
  // Diğer step-4-item'ların .is-active sınıfını kaldır
  $(".step-4-item .step-2-row-1_content.is-active").removeClass("is-active");
  $(".step-4-item .step-4-arrow .arrow.is-active").removeClass("is-active");
  $(".step-4-item .text-prew.is-active").removeClass("is-active");
  $(".step-4-item .text-prew.is-2.is-active").removeClass("is-active");

  // Tıklanan öğeye .is-active sınıfını ekle
  var $this = $(this);
  $this.find(".step-2-row-1_content").addClass("is-active");
  $this.find(".step-4-arrow .arrow").addClass("is-active");
  $this.find(".text-prew").addClass("is-active");
  $this.find(".text-prew.is-2").addClass("is-active");
});

//CARD 5
// Get a reference to the canvas element
var canvasEl = document.getElementById("myCanvas");

// You should only initialize a canvas once, so save this function
canvasEl.confetti =
  canvasEl.confetti || confetti.create(canvasEl, { resize: true });

// Create an object to hold the value we'll be animating
var obj = { val: 0 };

// Get a reference to the price text
var priceTextEl = document.querySelector(".price-text");

// GSAP animation with ScrollTrigger
gsap.to(obj, {
  val: 250,
  scrollTrigger: {
    trigger: ".process_scroll-area",
    // markers: true,
    ease: "none",
    start: "80% 65%", // When the top of the trigger hits the center of the viewport
    end: "80% center", // When the bottom of the trigger hits the top of the viewport
    scrub: true, // Animasyonu scrub'la
    onUpdate: function (self) {
      // On each update, set the text of the price text element to the current value
      priceTextEl.textContent = Math.round(obj.val);

      // When the value reaches 250, trigger the confetti
      if (obj.val >= 250 && !self.triggered) {
        // Call the confetti function on the canvas when .process-card.is-5 comes into view
        canvasEl.confetti({
          particleCount: 300, // adjust as needed
          spread: 90, // adjust as needed
          colors: ["#008CFF", "#FFFFFF", "#42516B"], // add this line
          origin: { y: 0.9 } // adjust as needed
        });

        // Prevent the confetti from being triggered again until the value drops below 250
        self.triggered = true;
      }

      // When the value drops below 250, reset the triggered property
      if (obj.val < 250) {
        self.triggered = false;
      }
    }
  }
});

//Testimonials cards animation

// jQuery kullanarak her .testimonials-card elementi üzerinde döngü başlat
$(".testimonials-card").each(function () {
  // Her kart için ayrı bir GSAP timeline oluştur
  let tlTestiomnials = gsap.timeline({
    scrollTrigger: {
      trigger: this, // Her kart kendi tetikleyicisi olacak
      start: "top 90%"
      // markers: true
    }
  });

  // Timeline'a animasyon ekle
  tlTestiomnials.from(this, {
    yPercent: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  });
});

// .testimonial-vertical class'ini animasyon sürecine dahil et
let tlVertical = gsap.timeline({
  scrollTrigger: {
    trigger: ".section.is-testimonials", // Tetikleyici bu section olacak
    start: "top bottom",
    end: "bottom top",
    scrub: 2
    // markers: true
  }
});

// .testimonial-vertical ve .testimonial-vertical.is-r animasyonlarını aynı anda başlat
tlVertical
  .add(
    gsap.fromTo(
      ".testimonial-vertical:not(.is-r)", { y: "5em" }, { y: "-7em" }
    ),
    0 // bu animasyon timeline'ın başında başlar
  )
  .add(
    gsap.fromTo(".testimonial-vertical.is-r", { y: "-7em" }, { y: "5em" }),
    0 // bu animasyon da timeline'ın başında başlar
  );

//CTA
// GSAP timeline oluştur ve ScrollTrigger'ı ekleyin
const tlCtaUpper = gsap.timeline({
  scrollTrigger: {
    trigger: ".section.is-cta",
    start: "start 70%",
    id: "cta",
    //markers: true,
    toggleActions: "play none none reverse" // Yukarı scroll yaparken animasyonu resetle
  }
});

// Animasyonu ekle
tlCtaUpper.from(".cta-upper", {
  y: "100%",
  ease: "power3.out",
  opacity: 0,
  duration: 0.8 // Animasyon süresini 2 saniye yap
});
$(document).ready(function () {
  // Function to update the current price
  window.odometerOptions = {
    duration: 500 // Change animation speed to 500ms
  };

  function updateCurrentPrice(value) {
    var multiplier = Math.floor(value / 1000);
    var newPrice = Math.max(4.99, 5 * multiplier - 0.01);

    // find Odometer element and update its value
    var el = document.querySelector(".odometer");
    el.innerHTML = newPrice.toFixed(2); // update Odometer's value
  }

  function updateYearlyPrice(value) {
    var multiplier = Math.floor(value / 1000);
    var newPrice = Math.max(3.99, 4 * multiplier - 0.01);

    // find yearly price element and update its value
    var el = document.querySelector("#final-price-year");
    el.innerHTML = newPrice.toFixed(2); // update the yearly price
  }

  // Create a MutationObserver instance
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.type === "childList") {
        var currentValueText = $(
          "[fs-rangeslider-element=display-value]"
        ).text();
        var currentValue = parseFloat(currentValueText.replace(",", ""));
        updateCurrentPrice(currentValue);
        updateYearlyPrice(currentValue);
      }
    });
  });

  // Define what element should be observed and what types of mutations trigger the callback
  observer.observe($("[fs-rangeslider-element=display-value]")[0], {
    childList: true
  });
});

//FAQ
document.querySelectorAll(".faq-question.is-open").forEach((openFaq) => {
  openFaq.classList.remove("is-open");
});

// Add 'is-open' class to the first FAQ question
let firstFaq = document.querySelector(".faq-question");
if (firstFaq) {
  firstFaq.classList.add("is-open");
}

document.querySelectorAll(".faq-question-trigger").forEach((faq) => {
  faq.addEventListener("click", function () {
    if (!faq.parentElement.classList.contains("is-open")) {
      document.querySelectorAll(".faq-question.is-open").forEach((openFaq) => {
        openFaq.classList.remove("is-open");
      });
      faq.parentElement.classList.add("is-open");
    } else {
      faq.parentElement.classList.remove("is-open");
    }
  });
});

//TIPPY Pricing

tippy("[data-tippy-content]", {
  theme: "adctippy",
  placement: "right"
});
