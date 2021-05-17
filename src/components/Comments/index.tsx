import * as Styled from './styles';
import { DiscussionEmbed } from 'disqus-react';

export type CommentsProps = {
  id: string;
  slug: string;
  title: string;
  allowComments: boolean;
};

export const Comments = ({ id, slug, title, allowComments }: CommentsProps) => {
  if (!allowComments) return null;
  const config = {
    url: `https://next-blog-lac-eight.vercel.app/post/${slug}`,
    identifier: id,
    title: title,
    language: 'pt_BR',
  };

  return (
    <Styled.Wrapper>
      <DiscussionEmbed shortname="blog-do-julys-martins" config={config} />
    </Styled.Wrapper>
  );
};
