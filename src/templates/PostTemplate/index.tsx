import * as Styled from './styles';
import { Post } from '../../components/Post';
import { PostTags } from '../../components/PostsTags';
import { PostStrapi } from '../../shared-typed/post-strapi';
import { SettingsStrapi } from '../../shared-typed/settings-strapi';
import { BaseTemplate } from '../Base';
import { Comments } from '../../components/Comments';

export type PostTemplateProps = {
  settings: SettingsStrapi;
  post: PostStrapi;
};

export const PostTemplate = ({ settings, post }: PostTemplateProps) => {
  console.log(post.allowComments);

  return (
    <BaseTemplate settings={settings}>
      <Post {...post} />

      <Styled.TagsContainer>
        <PostTags tags={post.tags} />
      </Styled.TagsContainer>

      <Comments
        title={post.title}
        slug={post.slug}
        id={post.id}
        allowComments={post.allowComments}
      />
    </BaseTemplate>
  );
};
