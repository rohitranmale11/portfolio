import React from "react";
import { Star } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";

const mentors = [
  {
    name: "Lori Stevens",
    title: "Tutor of physics",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Billy Vasquez",
    title: "Tutor of chemistry",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Larry Lawson",
    title: "Tutor of technology",
    avatar: "/placeholder.svg?height=40&width=40",
  },
];

const reviews = [
  {
    id: 1,
    author: "Carolyn Ortiz",
    avatar: "/placeholder.svg?height=48&width=48",
    rating: 5,
    text: "Moonlight newspaper up its enjoyment agreeable depending. Timed voice share led him to widen noisy young. At weddings believed laughing.",
  },
  {
    id: 2,
    author: "Dennis Barrett",
    avatar: "/placeholder.svg?height=48&width=48",
    rating: 5,
    text: "At weddings believed laughing although the Moonlight newspaper up its enjoyment agreeable depending.",
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
}

export default function Review() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side with reviews */}
          <div className="relative">
            {/* Background circle */}
            <div className="absolute -left-4 -top-4 w-72 h-72 bg-gray-200 rounded-full" />

            {/* Review cards */}
            <div className="relative space-y-6">
              {reviews.map((review, index) => (
                <Card
                  key={review.id}
                  className={`p-6 bg-white shadow-lg max-w-md ${index === 1 ? "ml-12" : ""}`}
                >
                  <div className="space-y-4">
                    <StarRating rating={review.rating} />
                    <p className="text-gray-600">"{review.text}"</p>
                    <div className="flex items-center gap-3">
                      <Avatar className="border border-slate-700 text-white bg-red-600">
                        <AvatarImage src={review.avatar} alt={review.author} />
                        <AvatarFallback>{review.author[0]}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{review.author}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Rating badge */}
            <div className="absolute top-1/2 right-12 transform -translate-y-1/2">
              <div className="bg-blue-600 text-white rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">4.5/5.0</div>
                <StarRating rating={4.5} />
                <div className="text-sm mt-2">Based on 5265 ratings</div>
              </div>
            </div>
          </div>

          {/* Right side content */}
          <div className="space-y-8">
            <div>
              <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                100+ Verified Mentors
              </Badge>
              <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
                Some valuable feedback from our students
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Supporting so be resolving breakfast am or perfectly. It drew a hill from me. Valley by oh twenty direct
                me so. Departure defective arranging rapturous did believe him all had supported.
              </p>
            </div>

            {/* Mentor list */}
            <div className="space-y-4">
              {mentors.map((mentor) => (
                <div key={mentor.name} className="flex items-center gap-3">
                  <Avatar className="border border-black bg-blue-500 text-white">
                    <AvatarImage src={mentor.avatar} alt={mentor.name} />
                    <AvatarFallback>{mentor.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{mentor.name}</div>
                    <div className="text-sm text-gray-500">{mentor.title}</div>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="outline" className="mt-6">
              View Reviews
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}


{/* <article className="px-24 mb-12 ">
    <div className="flex items-center mb-4">
        <img className="w-10 h-10 me-4 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt=""/>
        <div className="font-medium dark:text-white">
            <p>Jese Leos <time datetime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">Joined on August 2014</time></p>
        </div>
    </div>
    <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
    </div>
    <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Reviewed in the Jalgaon on <time datetime="2017-03-03 19:00">March 3, 2024</time></p></footer>
    <p className="mb-2 text-gray-500 dark:text-gray-400">This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.</p>
    <p className="mb-3 text-gray-500 dark:text-gray-400">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p>
    <a href="#" className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read more</a>
    <aside>
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">19 people found this helpful</p>
        <div className="flex items-center mt-3">
            <a href="#" className="px-2 py-1.5 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Helpful</a>
            <a href="#" className="ps-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 border-gray-200 ms-4 border-s md:mb-0 dark:border-gray-600">Report abuse</a>
        </div>
    </aside>
</article> */}