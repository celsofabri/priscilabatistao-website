import Menu from '@/components/Menu';

export default {
  name: 'MenuOverlay',
  components: {
    Menu
  },
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  }
};
