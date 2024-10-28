import './App.scss';
import hug from '@/assets/hug.gif';
import run from '@/assets/run.gif';
import photo1 from '@/assets/photo1.png';
import photo2 from '@/assets/photo2.png';
import photo3 from '@/assets/photo3.png';
import photo4 from '@/assets/photo4.png';
import photo5 from '@/assets/photo5.png';
import photo6 from '@/assets/photo6.png';
import photo7 from '@/assets/photo7.png';
import photo8 from '@/assets/photo8.png';
import photo9 from '@/assets/photo9.png';
import photo10 from '@/assets/photo10.png';
import photo11 from '@/assets/photo11.png';
import photo12 from '@/assets/photo12.png';
import park from '@/assets/park.png';
import love from '@/assets/love.png';
import welcome from '@/assets/welcome.png';
import cloud from '@/assets/cloud.png';
import about from '@/assets/about.png';
import sheSaid from '@/assets/sheSaid.png';
import heSaid from '@/assets/heSaid.png';
import he from '@/assets/he.png';
import she from '@/assets/she.png';
import { useEffect, useRef, useState } from 'react';
import { BounceText } from './components/BounceText';
import { Chat } from '@/assets/icons';
import CreateButton from './components/CreateButton';
import { Loader } from './components/Loader';
import CountdownTimer from './components/CountdownTimer';
import Calendar from './components/Calendar';

function App() {
    const targetDate = '2025-01-11';
    const targetHour = 12;
    const [isLoading, setIsLoading] = useState(true);
    const [loadingStatus, setLoadingStatus] = useState({
        images: false,
    });
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
            const imageUrls = [hug, run, photo1, photo2, photo3, photo4, photo5, photo6, photo7, welcome, cloud, about, sheSaid, heSaid, he, she];
            const loadImages = async () => {
                try {
                    await Promise.all(
                        imageUrls.map(
                            (url) =>
                                new Promise((resolve) => {
                                    const img = new Image();
                                    img.src = url;
                                    img.onload = resolve;
                                    img.onerror = () => {
                                        console.warn(`Image failed to load: ${url}`);
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

            const minLoadingTime = new Promise((resolve) => setTimeout(resolve, 0));
            const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Loading timed out')), 6000));

            Promise.race([
                (async () => {
                    await Promise.all([loadImages(), minLoadingTime]);
                })(),
                timeoutPromise,
            ])
                .then(() => setIsLoading(false))
                .catch((error) => {
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
                        {loadingStatus.fonts && !loadingStatus.images && <div>正在載入圖片，請稍候...</div>}
                        {loadingStatus.fonts && loadingStatus.images && <div>馬上就好...</div>}
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
                            <div className='marry'>
                                <BounceText text='我們結婚啦!' />
                            </div>
                        </div>
                        <div className='photo-text'>
                            <p>緣分讓我們相遇，愛情讓我們相守</p>
                            <div className='gray-line'>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div className='page-2'>
                        <div className='title-text'>
                            <div className='title-text1'>婚禮邀請</div>
                            <div className='title-text2'>
                                <img src={welcome} alt='welcome' />
                            </div>
                        </div>
                        <div className='sentences'>
                            <div className='title'>「婚禮」</div>
                            <div className='sentence'>
                                <br />
                                在人生旅途中
                                <br />
                                我們因愛而相聚
                                <br />
                                無比欣喜於這一天
                                <br />
                                你來為我們的幸福作見證
                                <br />
                                衷心希望每一位收到這份邀請的您
                                <br />
                                一同見證這一生中最重要的決定。
                            </div>
                            <div className='gif'>
                                <img src={hug} alt='hug' />
                            </div>
                        </div>

                        <div className='main-photos'>
                            <div className='main-photo1'>
                                <img src={photo2} alt='main-photo1' />
                            </div>
                            <div className='main-photo2'>
                                <img src={photo3} alt='main-photo1' />
                                <div className='text'>
                                    <div className='text-column'>
                                        <div>滿心期待藏於心底</div>
                                        <div>等著與你相逢之時</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='photo-text'>
                            一枚戒指，牽繫了兩個人的一生 <br /> 兩顆心，共度溫馨的小日子 <br /> 從此我為你挽起長髮 ，從此你的秋衣由我準備 <br /> 願攜手到白頭，珍惜每一個平凡的日子
                        </div>
                    </div>
                    <div className='page-3'>
                        <div className='title-text'>
                            <div className='title-text1'>- 關於我們 -</div>
                            <div className='title-text2'>
                                <img src={about} alt='about' />
                            </div>
                        </div>
                        <div className='date-bar'>
                            <div className='date'>2019.04.20</div>
                            <div className='line'></div>
                            <div className='date'>2025.01.11</div>
                        </div>

                        <div className='main-photos'>
                            <div className='main-photo1'>
                                <div className='text-area'>
                                    <div className='said'>
                                        <img src={sheSaid} alt='sheSaid' />
                                    </div>
                                    <div className='text'>
                                        "每當我想到
                                        <br />
                                        我們的未來
                                        <br />
                                        心中便湧現出
                                        <br />
                                        無限的期待與幸福"
                                    </div>
                                </div>
                                <div className='img-area'>
                                    <img src={she} alt='she' />
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
                                    <img src={he} alt='he' />
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
                                        <img src={heSaid} alt='heSaid' />
                                    </div>
                                    <div className='text'>
                                        "你的微笑
                                        <br />
                                        是我每天的動力
                                        <br />
                                        讓我勇敢追求
                                        <br />
                                        每一個夢想"
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='page-4'>
                        <div className='main-photos'>
                            <div className='gradient-image-container'>
                                <img src={photo4} alt='photo4' />
                            </div>
                        </div>
                        <div className='photo-text'>
                            此刻起， 我們攜手踏上嶄新的旅程
                            <br />
                            無論順境或逆境
                            <br />
                            歡樂或憂傷
                            <br />
                            我都願與你一起承擔
                            <br />
                            一同前行
                        </div>
                        <div className='gif'>
                            <img src={run} alt='run' />
                        </div>
                    </div>
                    <div className='page-5'>
                        <div className='main-photos'>
                            <div className='rect'></div>
                            <div className='text'>
                                <p>在這浪漫的天堂</p>
                                <p>我鼓起勇氣</p>
                                <p>向你許下</p>
                                <p>最美的承諾</p>
                            </div>
                            <div className='main-photo1'>
                                <img src={photo6} alt='main-photo1' />
                            </div>
                            <div className='main-photo2'>
                                <img src={photo5} alt='main-photo2' />
                            </div>
                        </div>
                        <div className='photo-text'>
                            She said yes !
                            <br /> filling my heart with joy and sealing our love for eternity.
                            <br />
                            <br />
                            在這浪漫的時光，永不分離
                        </div>
                        <div className='gray-line'>
                            <div></div>
                        </div>
                        <div className='shi'>囍</div>
                        <div className='line'>/</div>
                    </div>
                    <div className='page-6'>
                        <div className='main-photo'>
                            <img src={photo7} alt='main-photo1' />
                        </div>
                        <div className='photo-text1'>遇見你之後，我開始熱愛生活，期盼餘生</div>
                        <div className='photo-text2'>初見傾心，再見傾情，此生與你共度時光。</div>
                        <div className='love'>
                            <img src={love} alt='love' />
                        </div>
                    </div>
                    <div className='page-7'>
                        <div className='title-text'>
                            <div className='title-text1'>婚禮時間</div>
                            <div className='title-text2'>
                                2025年1月11日 星期六
                                <br />
                                午宴 12:00 入場
                            </div>
                        </div>
                        <div className='main-photo'>
                            <div className='img-flex'>
                                <img src={photo8} alt='main-photo1' />
                                <div className='count'>
                                    <CountdownTimer targetDate={targetDate} targetHour={targetHour} />
                                </div>
                                <div className='calendar'>
                                    <Calendar month={0} year={2025} highlightDate={11} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='page-8'>
                        <div className='title-text'>
                            <div className='title-text1'>婚禮地點</div>
                            <div className='title-text2'>
                                台南福爾摩沙遊艇酒店
                                <br />
                            </div>
                        </div>
                        <div className='photos-container'>
                            <img src={photo10} alt='wedding photo' />
                            <img src={photo9} alt='wedding photo' />
                        </div>
                        <div className='photo-text'>
                            <p>3F 水景廳</p>
                            <p>鄒陳府喜宴</p>
                        </div>

                        <div className='location-container'>
                            <div className='map-container'>
                                <iframe
                                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.6763112590465!2d120.15287911089962!3d22.998927417123348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346dd9b680e0fcdb%3A0xbbd8ca575991685a!2z56aP54i-5pGp5rKZ6YGK6ImH6YWS5bqX!5e0!3m2!1szh-TW!2stw!4v1730126785393!5m2!1szh-TW!2stw'
                                    allowFullScreen=''
                                    loading='lazy'
                                    referrerPolicy='no-referrer-when-downgrade'
                                ></iframe>
                            </div>
                        </div>
                        <div className='park'>
                            <div className='park-text'>
                                <div className='park-text1'>停車資訊</div>
                                <div className='park-text2'>
                                    酒店提供戶外及地下停車場，入住及用餐之旅客可享免費停車，全日24小時開放。請隨身攜帶貴重物品，酒店不負責停車場內停放之車輛及財物損失。
                                </div>
                            </div>
                            <div className='photos-container'>
                                <img src={park} alt='park' />
                            </div>
                        </div>
                    </div>
                    <div className='page-9'>
                        <div className='title'>We're married...</div>
                        <div className='main-photo' id='main-photo'>
                            <div className='gradient-image-container-soft'>
                                <img src={photo11} alt='photo11' />
                            </div>
                        </div>
                        <div className='last-text'>
                            這是一場人生為數不多的相聚
                            <br />
                            是千里迢迢地奔赴
                            <br />
                            是不計得失的支持
                            <br />
                            願所愛皆所得 所想皆所願
                            <br />
                            感謝您/不遠萬里/為我們祝福
                        </div>
                        <div className='see'>婚禮見 !</div>
                        <div className='thx'>- Thanks -</div>
                    </div>
                </div>
            )}
        </>
    );
}

export default App;
