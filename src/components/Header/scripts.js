import Logo from '@/components/Logo';
import Burger from '@/components/Burger';
import MenuOverlay from '@/components/MenuOverlay';

export default {
  name: 'Header',
  components: {
    Logo,
    Burger,
    MenuOverlay
  },
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    handleMenuActive() {
      this.isActive = !this.isActive;
    }
  }
};
