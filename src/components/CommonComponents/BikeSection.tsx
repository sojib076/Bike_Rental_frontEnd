

"use client";

import { ArrowRight } from 'lucide-react'
import { SkeletonLoader } from './SkeletonLoadert'
import { useGetRelatedBikesQuery } from '@/redux/api/api';
import { Link } from 'react-router-dom';


interface Bike {
    _id: string
    model: string
    imgageurl: string
    brand: string
}



export default function BikeSection({ bikeid }) {

    const { data, isLoading } = useGetRelatedBikesQuery(bikeid)

    const Bikes = data?.data || [] as Bike[]
    

    return (
        <section className="lg:py-16  ">
            <div className="container mx-auto px-4">
                <h2 className="lg:text-4xl
                text-2xl
                font-bold text-center mb-4">Explore Our Bikes</h2>
                <p className="text-xl text-gray-600 text-center mb-12">Find your perfect ride for every adventure</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {isLoading
                        ? Array(6).fill(0).map((_, index) => <SkeletonLoader key={index} />)
                        : Bikes.map((bike) => (
                            <div  key={bike._id} className="group bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
                                <div className="relative  h-64 sm:h-80">
                                    <img
                                   
                                        src={bike.imgageurl}
                                        alt={bike.model}


                                        className="
                                        
                                        w-full h-full object-cover object-center
                                        transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                                    <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 transition-transform duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                        <p className="text-sm font-semibold uppercase tracking-wider mb-1">{bike?.brand}</p>
                                        <h3 className="text-2xl font-bold">{bike?.model}</h3>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <Link
                                        to={`/bike/${bike._id}`} className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300">
                                        Explore bike <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

