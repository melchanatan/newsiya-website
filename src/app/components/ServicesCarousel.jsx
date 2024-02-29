"use client"
import React, {useState} from 'react'
import Image from "next/image";
import { Reorder, AnimatePresence, motion } from "framer-motion"

const ServicesCarousel = () => {
    const [items, setItems] = useState([0, 1, 2])
    const [selected, setSelected] = useState(1)

    const infos = [
        {
            image: '/service-1.jpg',
            title: 'สระว่างน้ำ 1',
            description: 'ไอซียู อ่อนด้อยเอเซีย นิวหมั่นโถว แอปเปิ้ล เคลื่อนย้าย ตุ๊กตุ๊กศากยบุตรหน่อมแน้ม เฮียไวอากร้าพาร์ทเนอร์ ฮวงจุ้ยบาร์บี้อุรังคธาตุ มิวสิคกุมภาพันธ์ไฮไลต์ สตริงสามแยกแครอทกระดี๊กระด๊ากระดี๊กระด๊า'
        },
        {
            image: '/service-1.jpg',
            title: 'สระว่างน้ำ 2',
            description: 'ไอซียู อ่อนด้อยเอเซีย นิวหมั่นโถว แอปเปิ้ล เคลื่อนย้าย ตุ๊กตุ๊กศากยบุตรหน่อมแน้ม เฮียไวอากร้าพาร์ทเนอร์ ฮวงจุ้ยบาร์บี้อุรังคธาตุ มิวสิคกุมภาพันธ์ไฮไลต์ สตริงสามแยกแครอทกระดี๊กระด๊ากระดี๊กระด๊า'
        },
        {
            image: '/service-1.jpg',
            title: 'สระว่างน้ำ 3',
            description: 'ไอซียู อ่อนด้อยเอเซีย นิวหมั่นโถว แอปเปิ้ล เคลื่อนย้าย ตุ๊กตุ๊กศากยบุตรหน่อมแน้ม เฮียไวอากร้าพาร์ทเนอร์ ฮวงจุ้ยบาร์บี้อุรังคธาตุ มิวสิคกุมภาพันธ์ไฮไลต์ สตริงสามแยกแครอทกระดี๊กระด๊ากระดี๊กระด๊า'
        }

    ]
    
    const swapToCenter = (item) => {
        setSelected(item)
        console.log(items)

        setItems( (prev) => {
            prev = prev.filter(e => e !== item)
            prev.splice(1, 0, item);
            console.log(prev)
            return prev;
        })
    }

    const handleSetSelected = () => {
        console.log(items[1])
        setSelected(items[1])
    }

    const handleReorder = (newOrder) => {
        setSelected(newOrder[1])
        setItems(newOrder)
    }

    return (
        <Reorder.Group axis="x" values={items} onReorder={handleReorder} 
        onDragEnd={handleSetSelected} className="flex flex-row items-center justify-center gap-[5vw] w-[130vw]">
                    {items.map(item => (
                        <Reorder.Item className="pointer-none select-none mb-4 w-[33%]" key={item} value={item}>
                          <ServicesCarouselCard onClick={() => swapToCenter(item)} info={infos[item]}  isSelected={selected === item}/>
                        </Reorder.Item>
                    ))}
            {/* <Image className="rounded-[40px] mb-4 w-[33%] hover:order-2" src={'/service-1.jpg'} width={400} height={500}></Image>
            <div className="w-[33%]">
                <Image className="rounded-[40px] mb-4 w-full" src={'/service-1.jpg'} width={400} height={500}></Image>
                <div className="text-center items-center flex flex-col">
                    <h3 className="header-3">สระว่างนำ้</h3>
                    <p className="w-[36ch] text-center">
                        ไอซียู อ่อนด้อยเอเซีย นิวหมั่นโถว แอปเปิ้ล เคลื่อนย้าย ตุ๊กตุ๊กศากยบุตรหน่อมแน้ม เฮียไวอากร้าพาร์ทเนอร์ ฮวงจุ้ยบาร์บี้อุรังคธาตุ มิวสิคกุมภาพันธ์ไฮไลต์ สตริงสามแยกแครอทกระดี๊กระด๊ากระดี๊กระด๊า
                    </p>
                </div>
            </div>
            <Image className="rounded-[40px] mb-4 w-[33%]" src={'/service-1.jpg'} width={400} height={500}></Image> */}
        </Reorder.Group>
    )
}

export default ServicesCarousel

const ServicesCarouselCard = ({info, isSelected, onClick}) => {
  return (
    <AnimatePresence className="" >
        <Image 
            onClick={onClick}
            draggable={false}
            className={`rounded-[40px] mb-4 w-full h-[250px] object-cover hover:${!isSelected ? 'border-[10px]' : 'border-[0px]'} hover:border-white transition-all`}  
            src={info.image} width={400} height={500}>
         </Image>
            {
            isSelected &&
            <motion.div 
                className="text-center items-center flex flex-col"
                initial={{opacity: 0, y: 100}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: 100}}
                transition={{duration: 0.3}}
            >
                <h3 className="header-3">{info.title}</h3>
                <p className="w-[36ch] text-center">
                    {info.description}
                </p>
            </motion.div>
            }
       
    </AnimatePresence>
  )
}
