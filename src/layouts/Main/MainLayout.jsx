/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Button, Carousel, Container } from 'react-bootstrap';
import './MainLayout.css'
import logo from '../../assets/logo.jpg'
import Navbar from '../../pages/shared/navbar/Navigation';
import banner1 from '../../assets/banner-1.jpg'
import banner2 from '../../assets/banner-2.jpg'
import banner3 from '../../assets/banner3.jpg'
import banner4 from '../../assets/banner-4.jpg'
import Footer from '../../pages/shared/footer/Footer';
import Chefs from '../../pages/chefs/chefs';
import Copyright from '../../pages/shared/copyright/Copyright';


const Main = () => {
    const [chef, setChef] = useState([])
    useEffect(() => {
        fetch('https://chef-hunter-devbiplabmistry.vercel.app/chef')
            .then(res => res.json())
            .then(data => setChef(data))
    }, [])
    return (
        <Container>
            <div className="logo d-flex mt-5 mb-5 mx-auto">
                <img src={logo} alt="logo" />
                <div className="logo-content">
                    <h2>BURGER HAT</h2>
                    <p>COOKING RECIPEE</p>
                </div>
            </div>
            <div className="navbar mx-auto ">
                <Navbar></Navbar>
            </div>
            <div className="banner-wrapper sm:text-start md:text-center">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner1}
                            alt="First slide"
                        />
                        <Carousel.Caption className=''>
                            <h3>Ultimate Cheese BurgerFirst slide label</h3>
                            <p>A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking.Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner2}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Healthy Chicken Burger</h3>
                            <p>A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking.Nulla vitae elit libero, a pharetra augue mollis interdum </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner3}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3> The Quesadillas </h3>
                            <p>A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking.Nulla vitae elit libero, a pharetra augue mollis interdum </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner4}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>
                                Fried Babycorn Cigars</h3>
                            <p>A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking.Nulla vitae elit libero, a pharetra augue mollis interdum </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="chefs">
                <h3>Our Chefs</h3>
                <div className="card-wrapper mt-5 mb-5 sm:grid-col-1">
                    {
                        chef.map(c => <Chefs key={c._id} chefs={c}></Chefs>)
                    }
                </div>
            </div>
            <div className="tips">
                <div className="tips-content text-center">
                    <h3 className='fw-normal fs-3 text-white'>Natural ingredients and tasty food</h3>
                    <p className='fw-normal fs-5 text-white'>Some Trendy And Useful Tricks</p>
                    <Button variant="danger">TIPS AND TRICKS</Button>
                </div>
            </div>
            <div className="our-special-dishes mt-5 md:d-flex">
                <h2>Our Special Dishes</h2>
                <Carousel >
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgVFhUZGRgaHBweHBwYHRwaHBwYHBoZGhoaGhocIy4lHCErIRocJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHxISHjYsJSs0NDQ0MTQ0NjQ0NDQ0NDQ0NDY0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYBBwj/xAA+EAACAQIEBAQEBAUCBgIDAAABAhEAIQMEEjEFQVFhBiJxkRMygaEUQrHwUmLB0eEHchUjQ4KS8RaiM2Oy/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAJhEAAgICAgICAQUBAAAAAAAAAAECEQMhEjEEQRNRYSIycYGxkf/aAAwDAQACEQMRAD8AweYfaokN6dj01BeoNCZzXFNSOKYABQA5japEcVEdq4lICZ2pKtMqbDNADg9MfEgVIVqLHSkMYj2p2qmItqYwNMDga9SzQ5FSI1ABj450xUa0wtTla1IaIHF64i3rrG9Pw6YmPmKlQmKa62rqYlopkjAl5NQYwPKiENOi+1ItS1QNg4B3NFonOnlqh+LSdiJTjGKFGsmZqZEmpigphZxWMUTgvQ0imajTJJszjjUBUuuqnVOJVgaADENqIw8SFqvV4ohXtQBzNvaahwcQmKWae1Ny5uKaEw74dKiAaVFiMlmBaoUNT47WoZWpIsMmuRSVrU0tQA8C1MVb11Wps3oQD5p6NUYpytQxE4xKZiPUTU9D1pDOI9JmvTWa9N10IY9m7UlIpDFFIgU6ESgCoiaJyeTfEOlEZj0UTWn4b/p/jvfFdUWNh5m+1hWcpxXbLUW+jElqfhNevV8l/pxlVEuXcesX9BR6eC8iv/Qn1Y/3rN54r0x8GzyF3tTFavZx4MyLCDgiexb+9cXwLkgZGFPYs0D3NP5lVpMThvs8TTEOui2xq9h/+G5YDy4KfVZpP4EyrR/yl+hK/apWdt1xY3BJdo8bL2qMGvXcx/pvlTZdaHs0/rWf4n/prjLJwsQP2YaT77Vqsi96JaMfltqmcV3N8PxcA6cRGQ9xY+h2NRB7Vap7RAOzU/VK1A73ritamBHhCXmrDVQWAbzU4egAkuDTg9ooUPSfEiqAkzDTFTYMSKEd7CpcLFoEyy10qE+JSoAonBjaokQ9Kv8AQCdqTYS9Ky5GnEpkmNq6Q3SrpMNelSNgC1qXMOBRKrdKYQQdq1eDlV6UPjZVZ2o5j4Gf1Gu6qvxkl6Ux8knSnzQuLKMtXNRq/XIrExUX4dJ2o5oODKNQehpMjdDWmXBQcqfh4KuwVVknalzS2PizLJhsSAFJJ2AG5rc+HfAzONeZlRyQGD/3Hl6CtZwDgGDglXKh3tJbYdQo/rWsOErCViD9qx+X5W4xdDceG2ipyGBhYKhERVXt/U1YDEWIWKq2wXDNqiJsBvHcmhsDNHWywfLvO3Pn9KxeOUS1OLLgMQN5/wA2qXXbuf8ANA4OY1Lbf93qTWbX39qhaNOw3BcUYuJaBVGH77HnRqPO5mtcc60ROFlkpHS1OCiLUEGtAMf25ipD2aLfl/teuhNP0YuIUARsZ9Z+1MxcWOUU5MUbE3rjKDvvtI5VTjqkyV3sCzeTw8VCjorqdww+46V5r4q8CvhA4uXl03Kbso7fxD716wp5fs0+BRGDj0xt/Z8w4rGadhma9W8e+D1hszgptfEUDcfxAdetefYeWWruuxVfRXYnl2qNXq0fAE1J+DXeKOaBxZWqaHx8S9Xv4QdKjOSUjahSQcWUgxNqKwjRYyoB2qQZcDlT5CcWB667R/wB0pU+SDiyfEwYpi4NHuhtNQMI2rls6KIUwb1NE2pDe1O+A52F6fYm6GNjkWqB3Jq4ynBGe7MFFHYPDMBT5jqitI4pS6REskUZoOYtJ9KQy2M+yNFbJMTCSyoIprZl/wAoAFbR8d+zJ50ujP4HDcQiIiiF8OndmAqxZHmZprYLHdq0XjxM3nkBPwhFHzirTgfCkQh9yfsv9zVfi5cWBatRg4YVbCYAj9+grl8zGox4x9nR40nKTbDdrchRmUzBWINVDY0EX9ftUmFjC168pLi7O5q1TNUGV1huf7tQWZyLA+UBl+/+aAw8zEXo3K59hANxXdDyE9S/6ccsNbiVz4RBJSd79Z6R1pxJtB9R9KuG+G45A9YAINVuLkyljefzAeU/e1PJjjJcoihJxdMFVrc5/WpsNxpNr2/f2+9CuSpvt60w3MAdxBt+71zJ0dXaLFXH7O9SpmDz9N+VVL40X5j98q4M5ud6tToThZc/ilF/371KmYJO/K/tVD+J9P31qM5w2E2FUstC+OzSpmRvPrR2HiysxWOPEjAY7SRVnw/icwCbT32rWGdXTM54XVo0bKCCDcGxrxnxdwj8NmGVfkfzp2BJlfoZ+1eu4Jg2upuKxv8AqfggphP0YqT/ALhIH2NdMlaMI6Z598GdqfgqQdJFS5bFQRJFH/DRhIImufZqA/AYU1sE0eBNE4eWmmmS9FG2WmuplzV22Vim/AjlTtgV34WlVuuHSosVMq3B6T0qbB4U7eZvIO9T5jiODgAxDON+1ZjiPiHFxGhbAcxW0MDf7jOWb6PQuD8Ky+mZDP8AoaouNNiIzBE51TcN46+Fc+oo7F8V4jMGKLf99K7IwglSOaU5N2CJnMaPOjj6GisPHfTqKN7UA3iDEZySVj0oTG43itI1W7Cq0gpl/gZ9uYA9aixeMMCbqKyYxXJuxM96bP1qeQ+JoMXjz7AioMHirudIYT3quy3DXeW+Ud+dXHC8rgawhZTq0ecyxXV2FgbHl61EpOtGscSu5dAhzOMXVQCxBEqnmNjt5eteh5DHOkagR2O/16Vo+FcOwEQDCVQP4gBLHqTzoTO8FuWUmTPOxnrPKubNjlNJ3tGmLLGLarRW4zggmQIioXxLi4v/AI3qHMcMxxuot0M/Y1V4maImUdSLedSAY79K87Jjk+0ehGcH0y8/FxSHEe9Z38YbSD68t9+9L8RHP/1WLi1o0ST2bDL8QkG+2/epcPiUiDBHSsYM0QbGplzZ604ylHoiWJM0OdzGzKZXYjmP70JiZkkHla1/aqtc4etRpmDBjlf6Ch23YKNItMR7AzO/Lb1pnxAAD96p3xyBPW/r3tT8DNA6lZjMbcx0pcWy6pFg2aMm8A0183I6tPLp/Wq9HkEztH1BtalhZpUYFioHLURH0mk0y6Qc8gHfreurjN5VDCTFpAuYInpvvRxz+XxFCs6qwg6hA0zyOwIqpzOWxA0JiIykDSyHWFg2kbqZJN7XNVjhKTpEyyRiv1GryXEvKo1jULEEgbX3nbv3rK/6leIteHh4CQb63sRYDy32O5uKrcv/AKf5kv8AFw8zD8y6kkza5BvVx4g4ExwETGYJiKBpcxBOxDGdjFjFor1cWNxVt6R5+SUJaj2+jzdcUyNxVmnEWEQQRUma4BmcNNbYR0X80giBF7HuCOtU/wAPqYreoy/JzPlF70afIcUUzJ0+tXmTz6/+q87BaCu9Pwsy6RBK+lZywr0Wsn2epqFdZBmmrh9qw2T486wG26jf2rS8K4+j2J29/asZQceyk0+iz+BXanXFQ/mFdqaHyZ5UELt5zO9TuwiIHeK46gKFvMzPWNqbiIRpaLGx9QbzXpHIdDQJMnp6VGcQkbfvvU74ZmRcE26V38IVhiYDW+tAA6ERNSDLeW/M2innQgspM7+nUU9LAH7UDImwwFt9assHh7oqYioMTWY0gwVsYczII26f2rmYmx2rbcOxkGBh6kgj8ptJUGJ9pE9RXNnm4pUdXjQjKT5GZfHcu6smINgugixBBYQu8+Yb1Y8B8OLmMcBy64arJ1eV4BjQIEybXO1WWLmmGXbERND/ADFCIA6xsTb7+9DZfGxiocPG97KTIAO57dK415ElJKtI7ZYY8Xfb6ZuM94gy2V+GhdcNJgCCRpA6j5bxJNXuHnkZQQwgiR6V5EcJ3Ys6yxldbwTomwsIArQcA4W6KTr1RsASVA5AH9xXTjz821Rw5vG+OKbZr8/xbAwhOIwANh3NVeV4nguHxkAZdtryszc/pWW8WYRcIXjysY3/AITN+VUuR4m2GXwwjEuAQdkAEjzX3vy6UpZeMqYQw8o2uy24b41fM45wkRFT8gZdRMb6htEGfpWjzHDsEgFsIM0gnSACRMnoNrelZnwxl8uuJrYBAi9dKySAO1bT4qiTIgU4OORW0GRSxukwfC4FgOs/CKSIIDkCN+tcbw3k1Uu4YKgJu7kADnGqpMDikjSYNztIAE2+sUNxXMhUaZKkRpF5nlVyjBK6REZTbq2H8P4Nw5hOGcNutwx+syZqwXw1lj8qr7CvGc/wYoUZMRUZhqRWO1xYEgbGL2o3hnHM/lp1ucRFA+YyQZgQ9jfoZrJTg0ro0ljyJum2em5vwXgOunSAI/KWQxEcj0oHC8B5dGDaWLfzO5BN7kTHM1i80ufx0L4+ZhoICIdIhgDpIHzDa5uJ5VuPBXG8NcBcBsbViYcqxZtRImxM7Ei8U4vHJtKglDJGNtsWL4Ow+SsI6O+3S5NqGfwrhrbQfretvlM5h4glHDAGCRe460QYiq4Qe6M3kmtNmLyHhdOYB9QKv8nwhE2UVYYBVhqCkdiIIjrU4FUqj0iXyl2zN5jPNh4hBwGCA7iDPcCbiY2vvblQvHuMKSuF8KQy6g5EhWn5SNxb/wB1q3wwRBAI73FZ7xBwBcQKyL5lJiCRExuJ2tyuKzm8iTrZ04ficlzVfwUWO64mG6PPmUgqUlWv5WVh5SYHK9+Veb8d4amFiBF1WUEkkEGeax+h6V6tg+HXw0HmJcxqE+UA3KiI1ep5E0Px/wANfHQqEJcKCpMEqVI8isSDB1NYz8ovMU8CktyVf2Hkzxt1F3/R5I+GBteotFv0ozHyTpJZTEkA9xv6VBIHe8fU110cdgfwwL00uVbUJHpRmPh3vzpjIGgfak0Ozv8AxzG/jP1pULiZcAm1Ko+NfRXJlmQCCSpkDy33E8/pUSqx5mOlG4eJaQATex3G4ge9DY+HudUSeu5PL7VszJHUcbEkdBUuO5aBcLzvPm61G5bcCRF53nlUuXxOp5HvSAYqkmD0i/8Aeo9BkQalfCBUgkrufU1NhKQvl2Qe80UFkDIRO87kkWipsxnMZ21q4VpEMoiIAEgDnAj/ABao0JMyTzt/WptMgAe+1qmUIy7Rccko/tZAgzDjEbFxCFCtIQlVuR5iJi5Mkd6ByPFWQaXMhSYHIgVNxYSkb9IJB+p6VPk8DDKLrXS0QbTccx61xZoxV6PR8BvLNxb3WkG8N4yuMfhqhL6Ty5WnpWn4V+KQEaVXDIkA3cnmZmy7WjeapvD+fyeV1uyM7tYFQLLvFzzP6CrzIeIUzIYohWDENE3jpt/ipwxinaZfmwyxtSWl7K/xAmM4BJhRvp3+lUHFeKKFC6SsWBIAPWY9TRfibiLowRHKzcxyHQT+7Vjsy0kkkk9SZoyRjKWxeOpRheixxPEAOhSAQGBuI+X1/d62eDxdHQO7eQwRpk2tva168u/CuwLhGKjmASJ6Vp/CuYGGuJhONJ8rJMkHUCCB9QPvWsEorRy55tu2bXJ8WwnBGGZjftPeg+K47kg8tok7fmO1DeFeHNiH4rGSVgxa8wb/AENH8X4bGwJM78x6UZI8o0RhlUkwPNNhjS7JLCIDXN/TeiXLsVP5SwIBN5FxFvT7Vls/xpsJ2RkJdbBoAnod+nShM1x98QiSSBAAgCOpH61xPDJ6PVhkitmnPEXuGvq67wI2NOywLNrVBrAFxpAMm085gmfWqFOKI8akn6/vtVknHcIBYlSO9u1ZqEovRtklGS6PSuDZlcFAzwpIuF69hzq9y3FMNwGDQpE+axje4O1eavxpTh6yQSqzEgGfrtQHD/FasdLYigt8uqwM8u1emsnSZ4s8Etuj158QRqVgR2M1Jh8QQ21CYmOcV5/kuIHCULpIXkQZF+1FjNqW1gDWBE84MSJq7sw4uJuTnVG5ql4vxuVZMs4+LKw0B1UTJ1DUDBjT21A1kPEXF2CDDVtLYkqGvYRcjvcAdzVD4VRsIuHexA08pC3JPQ/2571hlyKKf2dODE5NOXRtM14jximGXTRjK0MqONBBF28w6rtuJ36rw34tGZfEEgFWUBW1IzSIkA3EMI25+1HxrijfC1YI1snl0RLeY6RAiWE8+k1UYWYbDdMZdCMQJkecBTeFExuYrGGSctpWdE8eNKuh3i/K6Ma2qHlip2Dizxy6G38RrPvhhjA8vPtNW/HOJNmHktrCzBgzeJMcpig1wU62Aj2r0sfLiuR52TjyfEERBBVh5v3tUDYYkm/P7bVcKYIR7jSNJ6d6hzOSZCdSiCswDuDWlGdlMpbqKVEZhIYjSw2/KOYmu1NFWE/DALJqRrgzO8ROmPrUqZLTcgPqVyNQMBrWWLyBU6IgW8qCwUxJk2J+um2+55zRD4jKvnbV8pET8gEgaRz1DY2vyqiQAZUBIB8xgkNuBGoFT05Go8XLQFiwn37D2+9WX4kQA6gwG8p+ZSYWNQ5W+thVc+YBsoI0yQecGGk8vrQB10+VpWCCLWmmImqZaAYFtrH/AAa6oQOAY2jQJ3tv9zSwkgTbTO1zBvyG3+aQEmHhsSVAtMagDsYAn1ofOYuhtBEna/8AWNqIXFbUfhOdrjVpJ6qo572FHYBRMNzjppNhJEsJERB5kyfpWU3LpCdlHlsQ6C2JpY3uYiOQp+XRsVlRCCTtey2m55AUDmuKYcuhQlCZUiFMgQPQc/rRvhbGXDZ8cMU1eVFZdY0g+YvA2JgDT0NZN0ql0awnLG+a00R5/hmMgB8r9dBn9QJq48CZR3bGIBAUIDNvMS0D2BqZuKrDMdJJm6bBjzZGuvvei+Dcc0BtGliYkXEkc4vG/KsIxjFm8/PyZIuMvZkPFuPozLIxuAs725x9/vU3g/hRzOKzsP8Al4YliwsWM6VWDvznkB3FH53LPj45YJqfEcACDEkACbfKBuexq78QZpOHZYYeGBrcnSNpNtTkD6bdhRKS6j2zfDKcl+rSRSeIs4UVMNNCYQPIlS8nzQQDHqedV2C+lQoaSsk6AWsTI80ddzHSjsvn3Ny5RYX5biIE95kxHWjsZBmU+Hhg6iVl3QLphr95MGw/vVwhrZ585ucnr2S/6dcVK5vEwyp+G6zeWKvK6ZtaQxH0FbfNuHxHWPIgF4uW6+nL6GguA8CXLYRVVCs0m4kza5nnQbZPE1sRrZmJkKYJAEkyed+lavSo2hSTsr/E3DVVw7oCjCPRhffqR+lUB4Hht8rW71bZ3iz4mA+Xchnw28jyq6wpjzD8jRIPK9u1Bh50rY2rizKUXcT3/Anjnj4z7X+E+P4VJHlIodfCjj80Ec6Oy/E+9dxeKHqfc1msskjtfh4pu7RWZvhWMBD4modLf0FVY4YZiDV7iZ5jzPvUCsxNgSaazSZEvCxR6C+BK+FALmDACFjoEncj+1XGRzuPj5r8Phth4aKwDu3nnbVoLAAG8ARvVTkcsXsbSDE9eX0q0yWW+EjaF1OV9ZY8r7bj6g1cctHleZjg3US28YshY5dSo+HDhjZjrsUJAAYgwBebgVlsNyAQR5wSP5pPJgfT3pudymZxMRnzZ0MoDKhKyAzqCUhomAdzcg0Xn314raZJIFwLMQAAw2tNx612Ybk3a0eK5SUmgEpHlLAA/MDeR361Ni6YN+gEcgN/6VIqFZVyJAIAs0jf3ufaon0kSRaYgz8tuXt966khWSpghVubxNhf6nlyqNQRB2F+/p+tToB5SDNr3iBsP051yBJXzRMqp7bbfT3qqJscuKojrHzbsTzA6DlVgE15dnDeZCFYTLaZFz6/1qoKkahpvPrbov39qu/DWAn4fHd2CqwCAkTDXexIvyBoQMpfi4XMN/5Hbly6UqDxAJPnPvFKkMmZUDFjMHlMnVqvPQRHufQx4GJAneI38oa7CNQFpges+tdaP5rTEchzkz3AJ9e1NxdAuNZIJuVUyBJFja2oGpsdDXiTosN4DFomQon29+1uMNLAMCfSdhY273v2Nd0LbSzAxbWoaSQDPIc+W09q5ob5m+bmbEkMC0QbchbuaBjsVikKZiDItZZUzYwd5HOoQ5AkkXMxsR/j/NcxEYGShIjc78l6TcLPYG+1Dud2iLkRMkDt/fsaTY6JXVWs8BDZmQHUCLjTNv8AHpQuZwGYCcVmUSYJ6AAG+/SnkE6QTCneSF2NwJsB3NhfvUb4akQLi5A3OwIut5m3rHWoex0HYeSVMDTia/8AmMrHTHyqW0i/pNQ4ucEaQAqiABzgWG3OKizHEz8PQxXcgXGvnvewtvaqXM5oFrTH9a53Ft7J4tvZZYj6SHXVfeD1qx4HxNExpdAQwgmbg9RbttWaTMtYE2owiY/X/wBVTiujSKrZ6nkc2EPxVCMIhCpA3iYibxaoOK8JTMHXiEzeOwmQBXmuR4njZdtSNY3Km6nr6fvetLkPFivZzoNrN8s9m/vFYSxSW0dEczriwfGH4fGKEkHDAiNmSJsesn9xVrw3xd+HIQ4c6iS7AecEnnJuQP7VKuD8TELak1gDSDEjZue5+1pqPMcDw2nVKMQbncGZnoB1reMnSOHklNtG1yHiHAxhCYwLHlsw/wC03FA+IuNtlCuKAXVjpZefmWZB6yo+leePkymIrIY0QVbfzDdr7AwbdDW+47kDmMsksASisSRI+VSbHlc86icrqvs6sfTtejzrNY5xMPEzCuRis5lU1SdRmw979q1K8KwUy6MSGdFBY3cs0AtafNeYA7RWeyXDMJvMrQdgBMi+87kbdKJ/DvgnyuzI0BgWJZVkairXgxPrUvJF/pYfHPjyTCsDwz8RRiYeK2lryyQZ/MukkGZIE/rUef8ADuLhYL48zoN0NmCFo1THeewrnD805cthu6o0B1YjaCDoItI3mOQrRJxJjhNh6AdS6CTfykEGRFzE1lkcUdHi5c27bqtfyY/L5V2BbTCgxJ73FuXOrjh+SKw25kyNhFo7kb2o7CwABB23jv1opSo2rllK+jseadU22Q5XJ6QSRtyolEdLnSosZ6CnPjqF3vcwASfYX61lOJcWfEdUVWCBhIYFS3MWNxtRDHJ79fZzZc1KzR8fy7ymNuuINN4GkrMKZgDbbrVZlMQqWQsVJMaW6gm0cth61N+OdMOMRGGE3zBX0lXN9YaCSLxEG9BPnndWIkLKuSWRSpaApABuIHSfMZr18E7iklo8nk5O2T4mG8mbMRqG0mV1De3T3pIQdiAx31Eb3mB6yO8iN5obWxAM6pYarQBFrwIFit7+nKicaDMqCwPmOmBpEgmd95MegrqQydNSjyxYi8AMDJ3G/wDSg8KRJEzEwCN+3e5qVmLdJESLbzuNMDbpz9aWiSF3/hgWM7AnneRHe/IUxC0wIMzIgiGXY3J3In6e9XmLi/ByyqVBfE8xBmI3Wf7/AOaHw0TAAd1l2YQoIgX3M92iO9VHEM8+M0nnqCgbA3n6Sf8A6nbai6CgDFYyYZP/ALb8/vNKrbLcJxSoPwXMzcRe5pVmURYCYeKJwXU/yMdLAdAT07x6moMXLQYZdJIuTPSLkbz25maxmEXW6k26cv3/AEq4yniR18rjWP5r2+u9YrI/Zq4otkTkZIgQAYvvYHuAfU1H8A/xAnp5SBcmDfabkRtPWpstxXAex8p7f1ov4CMLFW9DHSbW6fatFJMniyuwkUm5YfzrJIWG1Re5gWPOa6R+VgpO+0kb7HdTMEiYEWkQSY+EQRKCxkjaxNxIvG3MReNxUHwzE9SJ7G4jvtM/4FAgTFdVTSFKmPNB1AhZMaWsCDc3+nKhHFhoJJBA1DV5SQ8IJ5bXjdR1owZUmCZHLzDqWkC8Acj1ioTlQOZ5WO5BJE3vMD073pMYBjZZWgkEhRcDeNIYLueZmRyO1xQjZImwHW2xE2Fo2mAe9XLYDMobVcmx0rYm8mD/ADN6COlQPhSdzAU3MAAQCLbR7fN3FS0BVPkoPob9u56c96Kw8OBNul/oP1t9KJCH8xBnUBGkwYG4BsDJ9INpprI3lTSoMGAAACZIuQN7AT72ilRSY3FwARIlhbVaIJjpbmBPeq3GwYJt9DVkyySwIPPkfLqsJ5mDvvc8ia58IwPLv6dRHof3FKhlbl8fEw2DI2kjbmPar7G8YO6KrgtEyQAG5RMWImfaqfEwj0v0P9KibK7GLHoRtvbpzpNWTxV2XmW4guLIBuFJg72G3ua2udzifgVTVBKIA0EgkQpBkTfSRXn/AIdyx+I0QW0NAMGTqQbbWBqTxWcXWoYkLBKi4vs3sf13rJw3SKjkqTT9oKfMsdOqJURIEH69YqYZ41lVxcQfmaua8T+I+vL9KUsKZrDJxVI1q8QA6f0orL8YQnSGBboN6wrqTux9+9X/AIKyatmPNuFOkHmZE+0/epfjxK+dmuw0djtA6/4FWGX4dJvNW+U4dVvl8kByojgivRMs0n7K/JcPRb6RPWjcXgyYo0Pz2PMTzB5Ufh5eKNw0it4wXVGE5WY1PBDM2h8QNhA6lJEurjY9IM3qDO+BcdDrwTh40Ky6cRdJE3lFHk1A9f6CvQUSjcJauKUFSM0vo8AXDdWOG6EMPKQxKsI5Qbgz9z2p+XBO6nraOsA6jzm/rW2/1IXCbGwymn4ig/EIMGJX4YMbn5u4BrJ5HIYr/IjlY6DTyHzGw5GJ5RzrWMtDoIymBgj5mDEjYEdpn69elLE4owhUUgDnuQNoBO3MfXka7jZPBwiTj46KTcphziPMtvEDmL32oHG8S4KWy2WUm/nxoxDJNyEsn1MmhzoFEKyXB8bF1NHlFmxHIRBA3Z2MG3IX9d6JXMZLLScNfxeKOY8mXUjqzGXPYVmMxmMzmmBxsR3HJZAQDoqCFHtVnluH6epKqDpiSVM2XcE2aBG4vANZObfRaikWX/yLiTXGOUB2VFXSo6L5dqVNXMrAnMKlgdIXDYQRIZSwkqw8wnkwpVnbKMS4AH+7rPRSDHMn/E0HmcIQCL8z1iPL71b5wCTAMqYJJsFki8m8wfttQbgtGlSTOqSTOm4E9yAfepTNGirGGwuOW/Y9KJy+fdec+8+4ok5bybgEG/PzNeN+Ui9COk3jc2/fpVpktFzlPEDDdiP9w1CrXC4kri6K/wDsI9yp51i2wbwO5+gj+496bBUzP1FUmJ2bsZrAPld2S+zg7/09alGWBEo6PvGkjmRsGG9hz+tYnD4m4sWkdGvU2FnEJ8yle6Ej9KfJ/ZNL6Na+TcRCERA8oBtFrc4I6c6BxcCJLKBG8jkCd53Mn6ah1qvwc035Mww7Ez+tGYfFc0u2Irf7lp2xUvsauDsYVh3udIm7DnYr1+YctofwgjaYvIPyAahvYAX3/m2kXOXjGL+fAwn+g7T+g9qf/wAZQ/PlY5+Wd+tudF/aCvyVhw9IBEliYImAJuLkibDmOXQVxAdJ0qvW8GARYxcL73jtexbiWTPzYOIp7H9LV1c7kP8A9i9dpjva+1FodMAfRHywQZuOoGmOcCw2ET6Go2y6EAkwbzAjnYkSABEXvebVcJn8hMjFcbbheUb27RT1xsgb/iCPWDPczzo0BRJglGBU+YG2ltLAr07iIJvZtq5xVsXGfXiOXKrA8oGlR0AAFupv7WvdHD4IGbcA7gKsRM8u9/bpSwhkVv8AjH2iIUA7ch9feNoFGhU7Mx+FI35WO5m0zbYe32NdOVsWBB7CZuRJ9Nx7Vpy3DxvmST10rPrPXf363qJsThgOo4+ISP4QnYb6egAo0PZnFyxgiDJ5DoOsW02jrYd6ky2A6MrpIZfMCORAuegEc+d+tXv/ABDhosBmHn0FrWkKOd/qacOLZIfJk8Ztrs7XiY50UgNFwTxeghMZSrACSBK7X7jY+1azLcby5uMRb9TH615kONKI0cPS38ZnsN5qVPEWc2RMDDH8qj+1LiJnq2FxHDOzg/7b/pU54ig3kevl/WvHcbiOdf582VHRFA+5qszL4f8A1MbEc/zOf0WqqiT2HPeLsvh/Ni4a+rSfYVS5vx+jAhFxcT/Yuhb/AMzW+9eYDieEn/48NQesCffeg81xN33Yx05UckhqJsc14k0sWGFgox/M84zz/Q/91UvEPEWNiWbFdh0J0L9FT+pNUAcyAbT1qRMEneQf0n+0zUOTKSCA7NYzHQbeworAUwYWSItzIImxB6fcgVHw9dUGPY+8e255xVkmDpfVBtBsPyE2gdn1AdTiL0qSiXK6pVl7QTdT8xBP8sLc9nAq7w50K4BLJeN2OGx86gDdgU25thgExQeUwblRAjzJ/DcbC3yghh2RRzerjJIAA4U2GrRzgga0jkfLt/Fht/FUuQUd/wCHYhvhY6qhuAUTE3uSGbcEkkcgCALRSqUcNxv+k+HoN1lGexvZgIIvboIFKiyq/Jisxl4YSdWpgIJMCDG3P/FCrgyxB2CyB62H/wDI+gPWlSqF0X7IFw4QsBzW5uZ1C59JPsKjOGZAJmASZ3nYXpUqtEsGVJnuYHoo/wA/amMvP9yAaVKmiWRNh/v/AMv8VHiAgfvv/au0qaExqmKnw8067E+9KlVCCU4ww3g/Spl4wOakehpUqdsVHV4unf6ipRxVCPlHt/ilSppsKIzjqfyD2FL/AJJ3QD0FKlTEcOBhHZAKcmHhj8grlKmInGbw12wx7Cl/xJeSKPpSpUgOf8SUb/YUxuLqORpUqTY6In4yeQ96hfi7nYgegpUqVsdA+Jm2O7E86jW59vvzpUqQD0USCduY7RJ/UCnYWGbg7if/ACU7e8XpUqQyTEw7ejEX5kAE/SAferTAy/0iB6bd+n7PPtKkxheVyukkW31doIDTHK4NvTvVvhZXUqsBb5TeD8NhFuhB0kf7O9KlUsaLHh2DIW4lTG1ojp20H1+CP4qusDACmRyk3v5bBr8+TE7khutKlUDDMPJ4wH/KdAkmAykkSSSJnaZjtFKlSoA//9k="
                        />
                        <Carousel.Caption>
                            <h3>Chicken and Apple Sandwich</h3>
                            <p>The softness of chicken mince and crunch of apple and celery mingle well in these delicious sandwiches</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHmzDmtxefhin0Q7JBFmlgYGf1Yxok0jyGpA&usqp=CAU"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Almond Crusted Chicken with salad</h3>
                            <p>Include this delightful protein filled starter in your dinner menu and win the hearts of your loved ones. The crushed almond coating makes it crispier.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqQODrtFyA2uaxkltjYS_nsYcE-J3gK4Hr1Q&usqp=CAU"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Almond Crusted Chicken</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="footer mt-5">
                <Footer></Footer>
            </div>
            <div className="copy-right">
                <Copyright></Copyright>
            </div>
        </Container>
    );
};

export default Main;