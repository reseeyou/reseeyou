import {
    Stack,
    Box,
    BoxProps,
    Popover,
    PopoverTrigger,
    Link,
    useColorModeValue,
    PopoverContent,
    Text,
    Flex,
    Icon,
  } from '@chakra-ui/react';

  import NextLink from 'next/link';
  
  import { NAV_ITEMS, NavItem } from './navData';
  import { ChevronRightIcon } from '@chakra-ui/icons';
  
  export const DesktopNav = (props: BoxProps) => {
    return (
      <Stack direction={'row'} spacing={4} {...props}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  
                  fontSize={'sm'}
                  fontWeight={500}
                  color={useColorModeValue('gray.600', 'gray.200')}
                  _hover={{
                    textDecoration: 'none',
                    color: useColorModeValue('gray.800', 'white'),
                  }}>
                    <NextLink href={navItem.href ?? '#'}>
                    {navItem.label}
                    </NextLink>
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={useColorModeValue('white', 'gray.800')}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
      <NextLink href={href!} passHref={true}>
        <Link
          role={'group'}
          display={'block'}
          p={2}
          rounded={'md'}
          _hover={{ bg: useColorModeValue('pink.50', 'cyan.900') }}>
          <Stack direction={'row'} align={'center'}>
            <Box>
              <Text
                transition={'all .3s ease'}
                _groupHover={{ color: useColorModeValue('brand.1', 'brand.2') }}
                fontWeight={500}>
                {label}
              </Text>
              <Text fontSize={'sm'}>{subLabel}</Text>
            </Box>
            <Flex
              transition={'all .3s ease'}
              transform={'translateX(-10px)'}
              opacity={0}
              _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
              justify={'flex-end'}
              align={'center'}
              flex={1}>
              <Icon color={useColorModeValue('brand.1', 'brand.2')} w={5} h={5} as={ChevronRightIcon} />
            </Flex>
          </Stack>
        </Link>
      </NextLink>
    );
  };
  