const PAGES = [
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
        ],
      },
    ],
  },
];
export default PAGES;
