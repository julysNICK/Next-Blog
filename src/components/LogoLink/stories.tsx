import { LogoLink } from '.';
export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'LogoLink',
    srcImg: 'https://image.flaticon.com/icons/png/512/53/53133.png',
    link: 'http://localhost',
  },
};

export const imageOnly = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

export const textOnly = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};
textOnly.args = {
  srcImg: '',
};
