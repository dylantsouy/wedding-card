import './App.scss';
import hug from '@/assets/hug.gif';
import run from '@/assets/run.gif';
import photo1 from '@/assets/photo1.png';
import photo2 from '@/assets/photo2.png';
import photo3 from '@/assets/photo3.png';
import photo4 from '@/assets/photo4.png';
import photo5G from '@/assets/photo5.gif';
import photo5 from '@/assets/photo5.gif';
import photo6 from '@/assets/photo6.png';
import photo7 from '@/assets/photo7.png';
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
import { PreloadImage } from './components/PreloadImage';
import { Loader } from './components/Loader';
import sentyMaruko from '@/fonts/SentyMARUKO.ttf';
import jasonHandwriting from '@/fonts/JasonHandwriting3.ttf';
import zuiShenDe from '@/fonts/ZuiShenDeYeLiZuiWenRou-2.ttf';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadingStatus, setLoadingStatus] = useState({
        fonts: false,
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
        const loadFonts = async () => {
            const fonts = [
                new FontFace('NaikaiFontName', `url(${sentyMaruko})`),
                new FontFace('JasonHandwriting3', `url(${jasonHandwriting})`),
                new FontFace('GongFan', `url(${zuiShenDe})`),
            ];

            try {
                const loadedFonts = await Promise.all(fonts.map((font) => font.load()));
                loadedFonts.forEach((font) => document.fonts.add(font));
                setLoadingStatus((prev) => ({ ...prev, fonts: true }));
            } catch (err) {
                console.error('Font loading failed:', err);
                setLoadingStatus((prev) => ({ ...prev, fonts: true }));
            }
        };

        const imageUrls = [hug, run, photo1, photo2, photo3, photo4, photo5, photo6, photo7, welcome, cloud, about, sheSaid, heSaid, he, she];

        const loadImages = () => {
            return Promise.all(
                imageUrls.map((url) => {
                    return new Promise((resolve) => {
                        const img = new Image();
                        img.src = url;
                        img.onload = resolve;
                        img.onerror = resolve;
                    });
                }),
            ).then(() => {
                setLoadingStatus((prev) => ({ ...prev, images: true }));
            });
        };

        const minLoadingTime = new Promise((resolve) => {
            setTimeout(resolve, 2000);
        });

        // 先載入字體
        loadFonts()
            .then(() => {
                // 字體載入後再載入圖片
                return Promise.all([loadImages(), minLoadingTime]);
            })
            .then(() => {
                setIsLoading(false);
            });

        return () => {
            setIsLoading(true);
            setLoadingStatus({ fonts: false, images: false });
        };
    }, []);

    return (
        <>
            {isLoading ? (
                <div className='loader-overlay'>
                    <Loader />
                    <div className='loading-status'>
                        {!loadingStatus.fonts && <div>正在載入字體，請稍候...</div>}
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
                                <PreloadImage smallSrc={photo5} largeSrc={photo5G} alt='main-photo2' />
                            </div>
                        </div>
                        <div className='photo-text'>
                            She said yes !
                            <br /> filling my heart with joy and sealing our love for eternity.
                            <br />
                            <br />
                            在這浪漫的時光裡，永不分離
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
                        <div className='photo-text'>遇見你之後，我開始熱愛生活，期盼餘生</div>
                    </div>
                </div>
            )}
        </>
    );
}

export default App;
