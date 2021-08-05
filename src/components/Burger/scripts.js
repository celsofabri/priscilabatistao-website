export default {
  name: 'Burger',
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleMenu() {
      this.$emit('menu-toggle');
    }
  }
};
