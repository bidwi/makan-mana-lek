import { Notyf } from 'notyf';

const notyf = new Notyf({
  duration: 3000,
  position: {
    x: 'center',
    y: 'bottom',
  },
  types: [
    {
      type: 'info',
      background: '#cc7a00',
      icon: false,
    },
    {
      type: 'error',
      background: '#ff1a1a',
      icon: false,
    },
  ],
});

export default notyf;
