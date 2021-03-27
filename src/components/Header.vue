<script>
import FacebookIcon from "@/assets/icons/facebook.svg";
import TwitterIcon from "@/assets/icons/twitter.svg";
import InstagramIcon from "@/assets/icons/instagram.svg";
import WhatsAppIcon from "@/assets/icons/whatsapp.svg";
import MailIcon from "@/assets/icons/mail.svg";
import PhoneIcon from "@/assets/icons/phone.svg";
import ArrowDownIcon from "@/assets/icons/arrow_down.svg";
import HamburgerMenuIcon from "@/assets/icons/hamburger-menu.svg";
import pages from "@/pageLinks.js";

export default {
  name: "Header",
  components: {
    FacebookIcon,
    TwitterIcon,
    InstagramIcon,
    WhatsAppIcon,
    MailIcon,
    PhoneIcon,
    ArrowDownIcon,
    HamburgerMenuIcon,
  },
  data() {
    return {
      mobileMenu: false,
      pages,
      activeDropdown: undefined,
    };
  },
  computed: {
    navigationClass() {
      return this.mobileMenu ? "active" : "";
    },
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenu = !this.mobileMenu;
    },
    toggleDropdown(pageName) {
      if (this.activeDropdown === pageName) {
        this.activeDropdown = undefined;
      } else {
        this.activeDropdown = pageName;
      }
    },
  },
};
</script>

<template>
  <header class="header">
    <section class="top-bar">
      <div class="container">
        <div class="social-media">
          <a href="https://www.facebook.com/AksPro55/" target="_blank">
            <FacebookIcon />
          </a>
          <a href="https://twitter.com/AksPro55" target="_blank">
            <TwitterIcon />
          </a>
          <a href="https://api.whatsapp.com/send?phone=+905333736155" target="_blank">
            <WhatsAppIcon />
          </a>
          <a href="https://www.instagram.com/akspro55/" target="_blank">
            <InstagramIcon />
          </a>
        </div>
        <div class="contact">
          <a href="mailto:info@akspro.com.tr">
            <MailIcon />
            <span>info@akspro.com.tr</span>
          </a>
          <a href="tel:+903622385858">
            <PhoneIcon />
            <span>+90 362 238 5858</span>
          </a>
        </div>
      </div>
    </section>
    <section class="navigation">
      <div class="container">
        <router-link to="/">
          <img src="@/assets/images/logo-text.png" alt="Aks &amp; Pro Logo" />
        </router-link>
        <div class="mobile-menu" @click="toggleMobileMenu">
          <HamburgerMenuIcon />
        </div>
        <nav :class="navigationClass">
          <router-link to="/">Anasayfa</router-link>
          <div
            class="dropdown"
            v-for="(page, index) in pages"
            :key="index"
            :data-active="activeDropdown === page.name ? 1 : 0"
            @click="toggleDropdown(page.name)"
          >
            <div class="dropdown-title">
              {{ page.name }}
              <ArrowDownIcon />
            </div>
            <div class="dropdown-content" tabindex="-1">
              <div v-for="subPage in page.subPages" :key="subPage.path">
                <template v-if="subPage.newTab">
                  <a :href="subPage.path" target="_blank" class="banner">
                    <img :src="subPage.image.path" :alt="subPage.image.alt" />
                  </a>
                  <a
                    class="navLink"
                    v-for="link in subPage.links"
                    :key="link.to"
                    :href="subPage.path + link.to"
                    target="_blank"
                  >
                    {{ link.name }}
                  </a>
                </template>
                <template v-else>
                  <router-link :to="subPage.path" class="banner">
                    <img :src="subPage.image.path" :alt="subPage.image.alt" />
                  </router-link>
                  <router-link
                    class="navLink"
                    v-for="link in subPage.links"
                    :key="link.to"
                    :to="subPage.path + '/' + link.to"
                  >
                    {{ link.name }}
                  </router-link>
                </template>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
  </header>
</template>

<style lang="scss">
.header {
  & > .top-bar {
    height: 50px;
    color: $color-white;
    background-color: $color-primary;

    & > .container {
      height: 100%;
      @include flex-space-between;

      // & > .social-media > a {
      //   margin-right: 1rem;
      // }

      & > .social-media {
        @include flex-space-between;

        & > a {
          margin-right: 1rem;
        }
      }

      & > .contact {
        @include flex-space-between;

        & > a {
          margin-left: 2rem;
        }

        & span {
          width: max-content;
          margin-left: 0.5rem;
        }
      }

      & a {
        @include flex-center;
        height: $size-touch;

        & > svg {
          height: $size-icon;
          fill: $color-white;
        }
      }
    }
  }

  & > .navigation {
    height: 100px;
    background-color: $color-white;
    border-bottom: 1px solid $color-gray;

    & > .container {
      @include flex-space-between;
      height: 100%;

      & > a {
        @include flex-center;
        height: 100%;

        & > img {
          height: 70%;
        }
      }

      & > .mobile-menu {
        display: none;
      }

      & > nav {
        height: 100%;
        @include flex-space-between;

        & > a {
          height: 100%;
          user-select: none;
          @include flex-center;
          font-size: 1.2rem;
          color: $color-black;
          cursor: pointer;

          &:hover {
            color: $color-primary;
          }
        }

        & > .dropdown {
          margin-left: 2rem;
          height: 100%;
          position: relative;
          user-select: none;

          & > .dropdown-title {
            @include flex-center;
            height: 100%;
            font-size: 1.2rem;
            color: $color-black;
            cursor: pointer;

            & > svg {
              height: 1rem;
              fill: currentColor;
            }

            &:hover {
              color: $color-primary;
            }
          }

          & > .dropdown-content {
            display: none;
            color: $color-dark-gray;
            font-size: 1.2rem;
          }
        }
      }
    }
  }
}

// DESKTOP
@media (min-width: $breakpoint-large) {
  .dropdown[data-active="1"] > .dropdown-content {
    position: absolute;
    top: 100%;
    right: 0;
    z-index: 4;

    display: flex !important;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: $color-white;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);

    & a:hover {
      color: $color-primary;
    }

    & > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 1.5rem;
      min-width: 200px;

      &:not(:first-child) {
        border-left: 1px solid $color-gray;
      }

      .banner {
        align-self: center;
        & > img {
          height: 40px;
        }
      }

      .navLink {
        margin-top: 0.5rem;
        width: max-content;
      }
    }
  }
}

// MOBILE
@media (max-width: $breakpoint-large) {
  .header {
    & > .top-bar > .container {
      justify-content: center;

      & > .social-media {
        flex: 1.2;
        justify-content: space-evenly;

        & > a {
          margin-right: unset;
        }
      }

      & > .contact {
        flex: 0.5;
        justify-content: space-around;

        & > a {
          margin-left: unset;

          & > span {
            display: none;
          }
        }
      }
    }

    & > .navigation > .container {
      & > .mobile-menu {
        @include flex-center;
        cursor: pointer;
        user-select: none;

        & > svg {
          height: $size-icon;
        }
      }

      & > nav {
        display: none;
        z-index: 9;

        &.active {
          position: absolute;
          top: 150px;
          left: 0;
          @include flex-center;
          flex-direction: column;
          width: 100%;
          border-top: 3px solid $color-primary;
          background-color: #fff;
          height: unset;

          & > * {
            height: unset !important;
          }
        }

        & > .dropdown {
          display: flex;
          flex-direction: column;
          padding-top: 0.5rem;

          & > .dropdown-content {
            display: flex;
            flex-direction: column;

            & > div {
              display: flex;
              flex-direction: column;
              align-items: center;

              & img {
                display: none;
              }

              & > a:active {
                color: $color-primary;
              }
            }
          }
        }
      }
    }
  }
}
</style>
