import { Card, CardContent } from "@/components/ui/card"

interface FlexibleImageTextCardProps {
  imageOnLeft?: boolean
  imageUrl?: string
  altText?: string
  title: string
  description: string
  linkText?: string
  linkHref?: string
}

export default function ImageTextCard({
  imageOnLeft = true,
  imageUrl = "/placeholder.svg?height=300&width=400",
  altText = "Descriptive alt text",
  title = "Engaging Header",
  description = "This is a brief description or some interesting text that complements the image. It could be about a product, a service, or any topic that's relevant to your content.",
  linkText = "Learn More",
  linkHref = "#"
}: FlexibleImageTextCardProps) {
  return (
    <Card className="overflow-hidden mx-20 my-16">
      <CardContent className="p-0">
        <div className={`flex flex-col ${imageOnLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
          <div className={`md:w-1/2 ${imageOnLeft ? 'md:rounded-l-lg' : 'md:rounded-r-lg'} overflow-hidden`}>
            <img
              src={imageUrl}
              alt={altText}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4 text-primary">{title}</h2>
            <p className="text-muted-foreground mb-4">
              {description}
            </p>
            <a href={linkHref} className="text-primary hover:underline inline-flex items-center">
              {linkText}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}