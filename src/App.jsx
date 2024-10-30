import './App.scss';
import hug from '@/assets/hug.gif';
import run from '@/assets/run.gif';
import photo1 from '@/assets/photo1.webp';
import photo2 from '@/assets/photo2.webp';
import photo3 from '@/assets/photo3.webp';
import photo4 from '@/assets/photo4.webp';
import photo5 from '@/assets/photo5.webp';
import photo6 from '@/assets/photo6.webp';
import photo7 from '@/assets/photo7.webp';
import photo8 from '@/assets/photo8.webp';
import photo9 from '@/assets/photo9.webp';
import photo10 from '@/assets/photo10.webp';
import photo11 from '@/assets/photo11.webp';
import park from '@/assets/park.webp';
import love from '@/assets/love.webp';
import groom from '@/assets/groom.webp';
import welcome from '@/assets/welcome.webp';
import cloud from '@/assets/cloud.webp';
import about from '@/assets/about.webp';
import sheSaid from '@/assets/sheSaid.webp';
import heSaid from '@/assets/heSaid.webp';
import he from '@/assets/he.webp';
import she from '@/assets/she.webp';
import { useEffect, useRef, useState } from 'react';
import { BounceText } from './components/BounceText';
import { Chat } from '@/assets/icons';
import CreateButton from './components/CreateButton';
import { Loader } from './components/Loader';
import CountdownTimer from './components/CountdownTimer';
import Calendar from './components/Calendar';
import { LazyImage } from './components/LazyImage';
import { ScrollAnimation } from './components/ScrollAnimation';

function App() {
    const targetDate = '2025-01-11';
    const targetHour = 12;
    const [isLoading, setIsLoading] = useState(true);
    const [loadingStatus, setLoadingStatus] = useState({
        images: false,
    });
    const criticalImages = [
        photo1, 
        welcome,
        cloud,
    ];
    const observerRef = useRef(null);

    useEffect(() => {
        if (!isLoading) {
            observerRef.current = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            const clouds = document.querySelectorAll('.cloud');
                            clouds.forEach((cloud) => {
                                cloud.classList.add('cloud-animate');
                            });
                        }
                    });
                },
                {
                    threshold: 0.5,
                },
            );

            setTimeout(() => {
                const mainPhoto = document.getElementById('main-photo');
                if (mainPhoto && observerRef.current) {
                    observerRef.current.observe(mainPhoto);
                }
            }, 100);

            return () => {
                if (observerRef.current) {
                    observerRef.current.disconnect();
                }
            };
        }
    }, [isLoading]);

    const openLineChat = (lineId, defaultMessage = '') => {
        try {
            // 檢查是否是移動設備
            const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

            // 編碼預設訊息
            const message = encodeURIComponent(defaultMessage);
            let lineUrl;
            if (isMobile) {
                // 移動設備優先使用 LINE URL Scheme
                lineUrl = `line://ti/p/${lineId}`;
                // 如果有預設訊息
                if (defaultMessage) {
                    lineUrl += `?message=${message}`;
                }
            } else {
                // 桌面版使用網頁版 LINE
                lineUrl = `https://line.me/ti/p/${lineId}`;
                if (defaultMessage) {
                    lineUrl += `?message=${message}`;
                }
            }

            // 嘗試開啟 LINE
            const windowRef = window.open(lineUrl, '_blank');

            // 檢查是否成功開啟
            if (windowRef === null) {
                // 如果被阻擋彈出視窗，則使用 location.href
                window.location.href = lineUrl;
            }
        } catch (error) {
            alert('請複製此 LINE ID 添加好友：' + lineId);
        }
    };

    useEffect(() => {
        const loadResources = async () => {
            const loadCriticalImages = async () => {
                try {
                    await Promise.all(
                        criticalImages.map(
                            (url) =>
                                new Promise((resolve) => {
                                    const img = new Image();
                                    img.src = url;
                                    img.onload = resolve;
                                    img.onerror = () => {
                                        console.warn(`Critical image failed to load: ${url}`);
                                        resolve();
                                    };
                                }),
                        ),
                    );
                    setLoadingStatus((prev) => ({ ...prev, images: true }));
                } catch (error) {
                    setLoadingStatus((prev) => ({ ...prev, images: false }));
                }
            };

            const minLoadingTime = new Promise((resolve) => setTimeout(resolve, 2000));
            const timeoutPromise = new Promise((_, reject) => 
                setTimeout(() => reject(new Error('Loading timed out')), 6000)
            );

            Promise.race([
                (async () => {
                    await Promise.all([loadCriticalImages(), minLoadingTime]);
                })(),
                timeoutPromise,
            ])
                .then(() => setIsLoading(false))
                .catch((error) => {
                    console.warn('Loading terminated early:', error);
                    setIsLoading(false);
                });
        };

        loadResources();

        return () => {
            setIsLoading(true);
            setLoadingStatus({ images: false });
        };
    }, []);

    return (
        <>
            {isLoading ? (
                <div className='loader-overlay'>
                    <Loader />
                    <div className='loading-status'>
                        {!loadingStatus.images && <div className='GongFan'>正在載入圖片，請稍候...</div>}
                        {loadingStatus.images && <div className='GongFan'>馬上就好...</div>}
                    </div>
                </div>
            ) : (
                <div className='container '>
                    <div className='page-1'>
                        <div className='main-photo' id='main-photo'>
                            <div className='cloud cloud-right'>
                                <img src={cloud} alt='cloud' />
                            </div>
                            <div className='img'>
                                <img src={photo1} alt='love-dialog' />
                            </div>
                            <div className='cloud cloud-left'>
                                <img src={cloud} alt='cloud' />
                            </div>
                            <div className='marry JasonHandwriting3'>
                                <BounceText text='我們結婚啦!' />
                            </div>
                        </div>
                        <ScrollAnimation animation='fade' delay={1500} className='photo-text JasonHandwriting3'>
                            <p>緣分讓我們相遇，愛情讓我們相守</p>
                            <div className='gray-line'>
                                <div></div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animation='fade' delay={1500} className='mouse-area'>
                            <div className='mouse-scroll'>
                                <div className='text GongFan'>往下滑</div>
                                <div className='mouse'>
                                    <div className='mouse-in'></div>
                                </div>
                                <div className='main'>
                                    <span className='down-arrow-1'></span>
                                    <span className='down-arrow-2'></span>
                                    <span className='down-arrow-3'></span>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                    <div className='page-2'>
                        <div className='title-text'>
                            <div className='title-text1 GongFan'>婚禮邀請</div>
                            <div className='title-text2'>
                                <LazyImage src={welcome} alt='welcome' />
                            </div>
                        </div>
                        <div className='sentences'>
                            <div className='title JasonHandwriting3'>「婚禮」</div>
                            <div animation='slide-up' rootMargin='-280px 0px' className='sentence GongFan'>
                                <br />
                                在人生旅途中
                                <br />
                                我們因愛而相聚
                                <br />
                                無比欣喜於這一天
                                <br />
                                你來替我們的幸福作見證
                                <br />
                                衷心希望每一位收到這份邀請的您
                                <br />
                                一同見證這一生中最重要的抉擇。
                            </div>
                            <ScrollAnimation duration={0.75} animation='fade' rootMargin='-150px 0px' delay={700} className='gif'>
                                <LazyImage src={hug} alt='hug' />
                            </ScrollAnimation>
                        </div>

                        <div className='main-photos'>
                            <ScrollAnimation duration={1} animation='slide-up' rootMargin='-80px 0px' className='main-photo1'>
                                <div>
                                    <LazyImage src={photo2} alt='main-photo2' />
                                </div>
                            </ScrollAnimation>
                            <div className='main-photo2'>
                                <ScrollAnimation className='img' duration={1} delay={700} animation='slide-right'>
                                    <LazyImage src={photo3} alt='main-photo1' />
                                </ScrollAnimation>
                                <ScrollAnimation duration={1} delay={1000} animation='slide-right' className='text GongFan'>
                                    <div className='text-column'>
                                        <div>滿心期待藏於心底</div>
                                        <div>等著與你相逢之時</div>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                        <ScrollAnimation delay={1300} rootMargin='200px 0px' animation='slide-left' className='photo-text GongFan'>
                            一段誓言，象徵著我們共同的未來與夢想 <br /> 彼此的陪伴，共享每一個平凡而美好的日子 <br /> 從今我替你挽起長裙，從此你的秋衣由我打理 <br />{' '}
                            願一生相伴，不負時光，珍惜彼此的每一次擁抱與微笑
                        </ScrollAnimation>
                    </div>
                    <div className='page-3'>
                        <div className='title-text'>
                            <div className='title-text1 JasonHandwriting3'>- 關於我們 -</div>
                            <div className='title-text2'>
                                <LazyImage src={about} alt='about' />
                            </div>
                        </div>
                        <div className='date-bar JasonHandwriting3'>
                            <div className='date'>2019.04.20</div>
                            <div className='line'></div>
                            <div className='date'>2025.01.11</div>
                        </div>

                        <div className='main-photos'>
                            <div className='main-photo1'>
                                <div className='text-area'>
                                    <div className='said'>
                                        <LazyImage src={sheSaid} alt='sheSaid' />
                                    </div>
                                    <ScrollAnimation duration='very-slow' animation='slide-up' className='text GongFan'>
                                        "每當我回想起
                                        <br />
                                        我們的旅程
                                        <br />
                                        心中便充滿了
                                        <br />
                                        未來的美好期待"
                                    </ScrollAnimation>
                                </div>
                                <div className='img-area'>
                                    <ScrollAnimation duration='very-slow' rootMargin='-100px 0px' animation='scale-fade'>
                                        <LazyImage src={she} alt='she' />
                                    </ScrollAnimation>
                                    <CreateButton
                                        textColor='#8c2531'
                                        color='#fff'
                                        variant={'contained'}
                                        onClick={() => openLineChat('DjK1-NJqRc', '您好，我想詢問婚禮相關事宜！')}
                                        text='新娘'
                                        icon={<Chat />}
                                    />
                                </div>
                            </div>
                            <div className='main-photo2'>
                                <div className='img-area'>
                                    <ScrollAnimation duration='very-slow' rootMargin='-150px 0px' animation='scale-fade'>
                                        <LazyImage src={he} alt='he' />
                                    </ScrollAnimation>
                                    <CreateButton
                                        textColor='#8c2531'
                                        color='#fff'
                                        variant={'contained'}
                                        onClick={() => openLineChat('XCITiZ44pG', '您好，我想詢問婚禮相關事宜！')}
                                        text='新郎'
                                        icon={<Chat />}
                                    />
                                </div>
                                <div className='text-area'>
                                    <div className='said'>
                                        <LazyImage src={heSaid} alt='heSaid' />
                                    </div>
                                    <ScrollAnimation duration='very-slow' animation='slide-up' className='text GongFan'>
                                        "你的微笑
                                        <br />
                                        是我每天的動力
                                        <br />
                                        讓我勇敢追求
                                        <br />
                                        每一個夢想"
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='page-4'>
                        <div className='main-photos'>
                            <ScrollAnimation rootMargin='-200px 0px' animation='fade' className='gradient-image-container'>
                                <LazyImage src={photo4} alt='photo4' />
                            </ScrollAnimation>
                        </div>
                        <div className='photo-text GongFan'>
                            <ScrollAnimation delay={500} animation='fade'>
                                此刻起， 走向屬於我們的嶄新未來
                            </ScrollAnimation>
                            <ScrollAnimation delay={900} animation='fade'>
                                無論順境或逆境
                            </ScrollAnimation>
                            <ScrollAnimation delay={1300} animation='fade'>
                                歡樂或憂傷
                            </ScrollAnimation>
                            <ScrollAnimation delay={1700} animation='fade'>
                                我都願與你一起承擔
                            </ScrollAnimation>
                            <ScrollAnimation delay={2100} animation='fade'>
                                一同前行
                            </ScrollAnimation>
                        </div>
                        <ScrollAnimation delay={2100} className='gif'>
                            <LazyImage src={run} alt='run' />
                        </ScrollAnimation>
                    </div>
                    <div className='page-5'>
                        <div className='main-photos'>
                            <div className='rect'></div>
                            <ScrollAnimation duration='slow' delay={2700} animation='scale-fade' className='text GongFan'>
                                <p>在這浪漫的天堂</p>
                                <p>我鼓起勇氣</p>
                                <p>向你許下</p>
                                <p>最美的承諾</p>
                            </ScrollAnimation>
                            <ScrollAnimation duration='slow' delay={2500} rootMargin='150px 0px' animation='scale-fade' className='main-photo1'>
                                <img src={photo6} alt='main-photo1' />
                            </ScrollAnimation>
                            <ScrollAnimation duration='slow' rootMargin='250px 0px' delay={2700} animation='scale-fade' className='main-photo2'>
                                <img src={photo5} alt='main-photo2' />
                            </ScrollAnimation>
                        </div>
                        <ScrollAnimation duration='very-slow' rootMargin='350px 0px' delay={3000} animation='fade' className='photo-text GongFan'>
                            She said yes !
                            <br /> filling my heart with joy and sealing our love for eternity.
                            <br />
                            <br />
                            在這浪漫的時光，永不分離
                        </ScrollAnimation>
                        <div className='gray-line'>
                            <div></div>
                        </div>
                        <div className='shi GongFan'>囍</div>
                        <div className='line'>/</div>
                    </div>
                    <div className='page-6'>
                        <div className='main-photo'>
                            <LazyImage src={photo7} alt='main-photo1' />
                        </div>
                        <ScrollAnimation className='photo-text1 GongFan'>遇見你之後，我開始熱愛生活，期盼餘生</ScrollAnimation>
                        <ScrollAnimation duration='very-slow' className='photo-text2 GongFan'>
                            初見傾心，再見傾情，此生與你共度時光。
                        </ScrollAnimation>
                        <ScrollAnimation delay={1000} className='love'>
                            <LazyImage src={love} alt='love' />
                        </ScrollAnimation>
                    </div>
                    <div className='page-7'>
                        <div className='title-text'>
                            <div className='title-text1 GongFan'>婚禮時間</div>
                            <div className='title-text2 GongFan'>
                                2025年1月11日 星期六
                                <br />
                                午宴 12:00 入場
                            </div>
                        </div>
                        <div className='main-photo'>
                            <div className='img-flex'>
                                <ScrollAnimation rootMargin='-200px 0px' animation='slide-down'>
                                    <LazyImage src={photo8} alt='main-photo1' />
                                </ScrollAnimation>
                                <ScrollAnimation rootMargin='-180px 0px' delay={1000} animation='slide-right' className='count GongFan'>
                                    <CountdownTimer targetDate={targetDate} targetHour={targetHour} />
                                </ScrollAnimation>
                                <ScrollAnimation rootMargin='-150px 0px' delay={1000} duration={1} animation='slide-up' className='calendar JasonHandwriting3'>
                                    <Calendar month={0} year={2025} highlightDate={11} />
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                    <div className='page-8'>
                        <div className='title-text'>
                            <div className='title-text1 GongFan'>婚禮地點</div>
                            <div className='title-text2 GongFan'>
                                台南福爾摩沙酒店
                                <br />
                            </div>
                        </div>
                        <div className='photos-container'>
                            <ScrollAnimation rootMargin='-100px 0px' animation='slide-right'>
                                <LazyImage src={photo10} alt='wedding photo' />
                            </ScrollAnimation>
                            <ScrollAnimation rootMargin='-100px 0px' animation='slide-left'>
                                <LazyImage src={photo9} alt='wedding photo' />
                            </ScrollAnimation>
                        </div>
                        <div className='photo-text JasonHandwriting3'>
                            <p>3F 水景廳</p>
                            <p>鄒陳府喜宴</p>
                        </div>

                        <ScrollAnimation rootMargin='-100px 0px' animation='scale' className='location-container'>
                            <div className='map-container'>
                                <iframe
                                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.6763112590465!2d120.15287911089962!3d22.998927417123348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346dd9b680e0fcdb%3A0xbbd8ca575991685a!2z56aP54i-5pGp5rKZ6YGK6ImH6YWS5bqX!5e0!3m2!1szh-TW!2stw!4v1730126785393!5m2!1szh-TW!2stw'
                                    allowFullScreen=''
                                    loading='lazy'
                                    referrerPolicy='no-referrer-when-downgrade'
                                ></iframe>
                            </div>
                        </ScrollAnimation>
                        <div className='park'>
                            <div className='park-text'>
                                <div className='park-text1 JasonHandwriting3'>停車資訊</div>
                                <div className='park-text2 JasonHandwriting3'>
                                    酒店提供戶外及地下停車場，入住及用餐之旅客可享免費停車，全日24小時開放。請隨身攜帶貴重物品，酒店不負責停車場內停放之車輛及財物損失。
                                </div>
                            </div>
                            <ScrollAnimation rootMargin='-100px 0px' animation='scale' className='photos-container'>
                                <LazyImage src={park} alt='park' />
                            </ScrollAnimation>
                        </div>
                    </div>
                    <div className='page-9'>
                        <ScrollAnimation rootMargin='-100px 0px' delay={1000} animation='slide-left' duration={1} className='title GongFan'>
                            We're married...
                        </ScrollAnimation>
                        <div className='main-photo' id='main-photo'>
                            <ScrollAnimation rootMargin='-100px 0px' duration={1} animation='fade' className='gradient-image-container-soft'>
                                <LazyImage src={photo11} alt='photo11' />
                            </ScrollAnimation>
                        </div>
                        <div className='last-text GongFan'>
                            <ScrollAnimation delay={500} animation='fade'>
                                這是一場人生中少有的相聚
                            </ScrollAnimation>
                            <ScrollAnimation delay={900} animation='fade'>
                                是千里迢迢地奔赴
                            </ScrollAnimation>
                            <ScrollAnimation delay={1300} animation='fade'>
                                是不計得失的支持
                            </ScrollAnimation>
                            <ScrollAnimation delay={1700} animation='fade'>
                                願所愛皆所得 所想皆所願
                            </ScrollAnimation>
                            <ScrollAnimation delay={2100} animation='fade'>
                                感謝您/不遠萬里/向我們獻上祝福
                            </ScrollAnimation>
                        </div>
                        <ScrollAnimation delay={2500} animation='fade' className='see GongFan'>
                            婚禮見 !
                        </ScrollAnimation>
                        <ScrollAnimation delay={3000} className='thx GongFan'>
                            - Thanks -
                        </ScrollAnimation>
                        <ScrollAnimation delay={3200} className='design GongFan'>
                            網頁建置: 富颜<LazyImage className="groom" src={groom} alt="groom"></LazyImage> 
                        </ScrollAnimation>
                    </div>
                </div>
            )}
        </>
    );
}

export default App;
