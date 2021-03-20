<template>
  <footer class="Footer">
    <div class="container">
      <div class="copyright-text">Aks &amp; Pro - &copy; 2021</div>
      <div class="contact">
        <div class="icons">
          <a href="https://www.facebook.com/AksPro55/">
            <FacebookIcon />
          </a>
          <a href="https://twitter.com/AksPro55">
            <TwitterIcon />
          </a>
          <a href="https://api.whatsapp.com/send?phone=+905333736155">
            <WhatsAppIcon />
          </a>
          <a href="https://www.instagram.com/akspro55/">
            <InstagramIcon />
          </a>
          <a href="mailto:info@akspro.com.tr">
            <MailIcon />
          </a>
          <a href="tel:+903622385858">
            <PhoneIcon />
          </a>
        </div>
        <div>Yenimahalle, 16. Sk. No:8,</div>
        <div>55080 Canik/Samsun</div>
      </div>
    </div>
  </footer>
</template>

<script>
import FacebookIcon from '@/assets/icons/facebook.svg';
import TwitterIcon from '@/assets/icons/twitter.svg';
import InstagramIcon from '@/assets/icons/instagram.svg';
import WhatsAppIcon from '@/assets/icons/whatsapp.svg';
import MailIcon from '@/assets/icons/mail.svg';
import PhoneIcon from '@/assets/icons/phone.svg';

export default {
  name: 'Footer',
  components: {
    FacebookIcon,
    TwitterIcon,
    InstagramIcon,
    WhatsAppIcon,
    MailIcon,
    PhoneIcon,
  },
};
</script>

<style lang="scss">
.Footer {
  padding-top: 2rem;
  padding-bottom: 2rem;
  color: $color-white;
  background-color: $color-black;

  & > .container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    & > .contact {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      & > .icons > a {
        margin-left: 1rem;

        & > svg {
          width: $size-icon;
          height: $size-icon;
          fill: $color-white;

          &[fill] {
            fill: none;
          }
        }
      }
    }
  }
}
</style>
