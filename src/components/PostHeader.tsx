import Image from "next/image";

interface Author {
  name: string;
  picture: {
    url: string;
  };
}

interface CoverImage {
  file: {
    url: string;
    details: {
      image: {
        width: number;
        height: number;
      };
    };
  };
}

interface Post {
  title: string;
  coverImage: CoverImage;
  author: Author;
  date?: string;
}

interface PostHeaderProps {
  post: {
    fields: Post;
  };
}

const PostHeader: React.FC<PostHeaderProps> = ({ post }) => {
  const { title, coverImage } = post.fields;

  return (
    <>
      <h2>{title}</h2>
      <div className="hidden md:flex md:justify-between md:items-center md:mb-10">
        {/* <Avatar name={author.name} picture={author.picture} /> */}
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <Image
          alt={`Cover Image for ${title}`}
          src={coverImage.file.url}
          width={coverImage.file.details.image.width}
          height={coverImage.file.details.image.height}
        />
      </div>
      <div className="flex justify-between items-center md:hidden mb-6">
        {/* <Avatar name={author.name} picture={author.picture} /> */}
      </div>
    </>
  );
};

export default PostHeader;
