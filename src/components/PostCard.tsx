import Image from "next/image";
import Link from "next/link";
interface PostFields {
  title: string;
  slug: string;
  excerpt: string;
  coverImage: {
    fields: {
      file: {
        url: string;
        details: {
          image: {
            width: number;
            height: number;
          };
        };
      };
    };
  };
  author: {
    fields: {
      name: string;
      picture: {
        fields: {
          file: {
            url: string;
          };
        };
      };
    };
  };
  date: string;
}

interface PostCardProps {
  post: {
    fields: PostFields;
  };
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { title, slug, excerpt, coverImage } = post.fields;

  return (
    <li className="rounded-md overflow-hidden shadow-md">
      <Link href={`/posts/${slug}`} aria-label={title}>
        <div className="mb-2">
          <Image
            alt={`Cover Image for ${title}`}
            src={coverImage.fields.file.url}
            width={coverImage.fields.file.details.image.width}
            height={coverImage.fields.file.details.image.height}
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl mb-1 leading-snug">{title}</h3>
          <div className="text-sm mb-4 text-gray-400">
            {/* <DateComponent dateString={date} /> */}
          </div>
          <p className="text-base mb-4">{excerpt}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostCard;
