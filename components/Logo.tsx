import { Icon, IconProps, useColorModeValue, useTheme } from '@chakra-ui/react';

export const Logo = (props: IconProps) => {
  const theme = useTheme();

  const foreground = useColorModeValue(
    theme.colors.green[400],
    theme.colors.green[400]
  );
  const background = useColorModeValue(
    theme.colors.brand[1],
    theme.colors.brand[2]
  );

  return (
    <Icon
      width="420" 
      height="420" 
      viewBox="0 0 420 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path d="M379.5 417C400.211 417 417 400.211 417 379.5C417 358.789 400.211 342 379.5 342C358.789 342 342 358.789 342 379.5C342 400.211 358.789 417 379.5 417Z" 
        fill={background}
      />
      <path d="M46.3703 85.0934C46.3703 85.0934 128.776 43.9997 211.085 44C293.394 44.0003 345.953 51.2517 367.931 95.2459C389.91 139.24 319.015 175.822 247.354 240.531C159.147 320.181 48.8499 377 46.3703 377C41.8761 377 41.8766 187.519 46.3716 187.519C48.7069 187.519 121.917 220.388 192.56 260.405C257.889 297.412 311.767 336.213 311.767 336.213" 
        stroke={background}
        stroke-width="80" 
        stroke-linecap="round"
      />
      
    </Icon>
  );
};
