import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  Flex
} from '@chakra-ui/react'
import { MdOutlineStoreMallDirectory } from "react-icons/md";
import { IoBarChart } from "react-icons/io5";
import { MdOutlineInsertChart } from "react-icons/md";
import { TbTriangleSquareCircle } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';

const SIdeBar = () => {
    const navigate=useNavigate()
 const MdOutlineStoreMallDirectoryIcon = MdOutlineStoreMallDirectory as React.ElementType;
 const TbTriangleSquareCircleIcon = TbTriangleSquareCircle as React.ElementType;
 const MdOutlineInsertChartIcon = MdOutlineInsertChart as React.ElementType;
 const IoBarChartIcon = IoBarChart as React.ElementType;

  const menuItems = [
    { name: 'Store', icon: MdOutlineStoreMallDirectoryIcon ,nav:"/store"},
    { name: 'SKU', icon: TbTriangleSquareCircleIcon, nav:"/sku"},
    { name: 'Planning', icon: MdOutlineInsertChartIcon,nav:"/planning" },
    { name: 'Charts', icon: IoBarChartIcon, nav:"/charts"}
  ]

  return (
    <Box width="200px">
      <Accordion allowToggle border="none">
        {menuItems.map((item, index) => {
          const IconComponent = item.icon
          return (
            <AccordionItem key={index} border="none">
              <AccordionButton 
                _hover={{ 
                  bg: 'gray.200',
                  borderRadius: 'md'
                }}
                p={3}
               onClick={()=>navigate(item.nav)}
              >
                <Box as="span" flex="1" textAlign="left">
                  <Flex
                    alignItems="center"
                    fontSize="14px"
                    fontWeight="semibold"
                    pl={2}
                    gap="10px"
                 
                  >
                    <IconComponent size={20} />
                    {item.name}
                  </Flex>
                </Box>
              </AccordionButton>
            </AccordionItem>
          )
        })}
      </Accordion>
    </Box>
  )
}

export default SIdeBar