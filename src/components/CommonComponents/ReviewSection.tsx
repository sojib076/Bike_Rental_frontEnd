import { useState } from 'react'

import { Star, ThumbsUp, ThumbsDown } from 'lucide-react'
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface Review {
  _id: string
  userId: {
    name: string
  }
  date: string
  rating: number
  comment: string
  helpful: number
}

interface ReviewSectionProps {
  reviews: Review[]
}

export function ReviewSection({ reviews }: ReviewSectionProps) {
  return (
    <section className="lg:py-12  pb-12 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">Customer Reviews</h2>
        <div className="space-y-6">
          {reviews.map((review) => (
            <ReviewCard key={review._id} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ReviewCard({ review }: { review: Review }) {
  const [helpfulCount, setHelpfulCount] = useState(review.helpful)
  const [userVote, setUserVote] = useState<'helpful' | 'not-helpful' | null>(null)

  const handleVote = (isHelpful: boolean) => {
    if (userVote === null) {
      setHelpfulCount(isHelpful ? helpfulCount + 1 : helpfulCount - 1)
      setUserVote(isHelpful ? 'helpful' : 'not-helpful')
    } else if ((isHelpful && userVote === 'not-helpful') || (!isHelpful && userVote === 'helpful')) {
      setHelpfulCount(isHelpful ? helpfulCount + 2 : helpfulCount - 2)
      setUserVote(isHelpful ? 'helpful' : 'not-helpful')
    }
  }

  return (
    <Card className="w-full">
      <CardContent className="pt-6">
        <div className="flex items-center mb-4">
          <Avatar className="h-10 w-10 mr-4">
            <AvatarFallback>{review.userId.name[0].toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-gray-800 dark:text-gray-200">{review.userId.name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {
                new Date(review.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })
              }
            </p>
          </div>
        </div>
        <div className="flex mb-2" aria-label={`Rating: ${review.rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={`h-5 w-5 ${
                index < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{review.comment}</p>
      </CardContent>
      <Separator />
      <CardFooter className="flex items-center justify-between py-4">
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleVote(true)}
            disabled={userVote === 'helpful'}
            aria-label="Mark as helpful"
          >
            <ThumbsUp className="h-4 w-4 mr-2" />
            Helpful
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleVote(false)}
            disabled={userVote === 'not-helpful'}
            aria-label="Mark as not helpful"
          >
            <ThumbsDown className="h-4 w-4 mr-2" />
            Not Helpful
          </Button>
        </div>
        <p className="
          lg:block hidden
        text-sm text-gray-500 dark:text-gray-400">
          {helpfulCount} {helpfulCount === 1 ? 'person' : 'people'} found this helpful
        </p>
      </CardFooter>
    </Card>
  )
}

