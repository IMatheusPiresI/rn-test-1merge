import React from 'react';
import { IViewProps } from './types';
import { VStack } from 'native-base';

import { HeaderPost } from '../_components/HeaderPost';
import { FooterPost } from '../_components/FooterPost';
import { ContentPost } from '../_components/ContentPost';

const Post: React.FC<IViewProps> = ({ data }) => (
  <VStack bgColor={'#fff'} px="6" py="4">
    <HeaderPost photoUser={data.photo} name={data.name} />
    <ContentPost text={data.text} image={data.image} />
    <FooterPost />
  </VStack>
);

export default Post;
