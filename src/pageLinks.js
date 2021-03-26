export default [
  {
    name: "Profil Serileri",
    subPages: [
      {
        image: {
          path: require("@/assets/images/companies/rescara-logo.png"),
          alt: "Rescara Logo",
        },
        path: "/profil-serileri/rescara",
        links: [
          {
            name: "Kapı ve Pencere Sistemleri",
            to: "kapi-ve-pencere-sistemleri",
          },
          {
            name: "Sürme ve Kaldırsür Sistemleri",
            to: "surme-ve-kaldirsur-sistemleri",
          },
          {
            name: "Giydirme Cephe Sistemleri",
            to: "giydirme-cephe-sistemleri",
          },
          {
            name: "Ofis Bölme Sistemleri",
            to: "ofis-bolme-sistemleri",
          },
          {
            name: "Skylight Işıklık Sistemleri",
            to: "skylight-isiklik-sistemleri",
          },
          {
            name: "Diğer",
            to: "",
          },
        ],
      },
      {
        image: {
          path: require("@/assets/images/companies/almin-logo.png"),
          alt: "Almin Logo",
        },
        path: "/profil-serileri/almin",
        links: [
          {
            name: "Aldoks Profiller",
            to: "aldoks-profiller",
          },
          {
            name: "Asansör Profilleri",
            to: "asansor-profilleri",
          },
          {
            name: "Aydınlatma Profilleri",
            to: "aydinlatma-profilleri",
          },
          {
            name: "C60 Sistem Profilleri",
            to: "c60-sistem-profilleri",
          },
          {
            name: "Çadır ve Tente Profilleri",
            to: "cadir-ve-tente-profilleri",
          },
          {
            name: "Diğer",
            to: "",
          },
        ],
      },
    ],
  },
  {
    name: "Kompozit Paneller",
    subPages: [
      {
        image: {
          path: require("@/assets/images/companies/naturalbond-logo.png"),
          alt: "Naturalbond Logo",
        },
        path: "/kompozit-paneller/naturalbond",
        links: [
          {
            name: "Asaş Kompozit Panel",
            to: "",
          },
        ],
      },
      {
        image: {
          path: require("@/assets/images/companies/akpa-logo.png"),
          alt: "Akpa Logo",
        },
        path: "/kompozit-paneller/akpa",
        links: [
          {
            name: "Akpa Kompozit Panel",
            to: "",
          },
        ],
      },
    ],
  },
  {
    name: "Aksesuarlar",
    subPages: [
      {
        image: {
          path: require("@/assets/images/logo-text.png"),
          alt: "Aks & Pro Logo",
        },
        path: "/aksesuarlar/akspro",
        links: [
          {
            name: "Cam Kapı Aksesuarları",
            to: "cam-kapi-aksesuarlari",
          },
          {
            name: "Ofis Kapı Kolları",
            to: "ofis-kapi-kollari",
          },
          {
            name: "Basma Kapı Kolları",
            to: "basma-kapi-kollari",
          },
          {
            name: "Cephe ve Pencere Kolları",
            to: "cephe-ve-pencere-kollari",
          },
          {
            name: "Menteşeler",
            to: "menteseler",
          },
          {
            name: "Daha fazlası",
            to: "",
          },
        ],
      },
      {
        image: {
          path: require("@/assets/images/companies/akpa-logo.png"),
          alt: "Akpa Logo",
        },
        newTab: true,
        path: require("@/assets/pdf/aksesuarlar/akpa-kupeste-katalogu.pdf"),
        links: [
          {
            name: "Küpeşte Kataloğu",
            to: "",
          },
        ],
      },
      {
        image: {
          path: require("@/assets/images/companies/soudal-logo.png"),
          alt: "Soudal Logo",
        },
        path: "/aksesuarlar/soudal",
        links: [
          {
            name: "Silikonlar",
            to: "",
          },
        ],
      },
    ],
  },
];
