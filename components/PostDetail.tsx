import React from 'react'
import moment from 'moment'
import CategoriesButtons from './CategoriesButtons'

const PostDetail = ({ post }: any) => {
  const getContentFragment = (index: any, text: any, obj: any, type: any) => {
    let modifiedText = text

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>
      }
    }

    switch (type) {
      case 'heading-two':
        return (
          <h2 key={index} className="mb-4 text-4xl font-semibold">
            {modifiedText.map((item: any, i: any) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h2>
        )
      case 'heading-three':
        return (
          <h3 key={index} className="mb-4 text-xl font-semibold">
            {modifiedText.map((item: any, i: any) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        )
      case 'paragraph':
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item: any, i: any) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        )
      case 'heading-four':
        return (
          <h4 key={index} className="text-md mb-4 font-semibold">
            {modifiedText.map((item: any, i: any) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        )
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        )
      default:
        return modifiedText
    }
  }

  return (
    <div className="relative mb-8 rounded-lg pb-12 text-white lg:p-8">
      <span className="right-0 hidden h-full w-[1px] bg-white opacity-10 lg:absolute"></span>
      <h1 className="mb-8 font-primary text-5xl font-semibold leading-tight">
        {post.title}
      </h1>
      <div className="px-4 lg:px-0">
        <div className="mb-8 flex w-full items-center text-white">
          <div className="mb-4 mr-8 flex w-full items-center lg:mb-0 lg:w-auto">
            <img
              src={post.author.photo.url}
              alt={post.author.name}
              height="30px"
              width="30px"
              className="rounded-full align-middle"
            />
            <p className="ml-2 inline align-middle text-lg ">
              {post.author.name}
            </p>
          </div>
          <div className="font-medium ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 inline h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>{moment(post.createdAt).format('MMM, DD, YYYY')}</span>
          </div>
        </div>
        <CategoriesButtons />
        <div className="reative mb-6 overflow-hidden">
          <img
            src={post.featuredImage.url}
            alt={post.title}
            className="h-full w-full rounded-t-lg object-top"
          />
        </div>
        {post.content.raw.children.map((typeObj: any, index: any) => {
          const children = typeObj.children.map((item: any, itemIndex: any) =>
            getContentFragment(itemIndex, item.text, item, typeObj)
          )

          return getContentFragment(index, children, typeObj, typeObj.type)
        })}
      </div>
    </div>
  )
}

export default PostDetail
