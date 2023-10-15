import styles from './index.module.css';
import Link from 'next/link';

const Home = () => {
  	return (
    		<div className={styles.home}>
      			<div className={styles.headersV5}>
        				<div className={styles.container5} />
        				<div className={styles.sections}>
							<Link href="/">
          					<div className={styles.services}>Home</div>
							</Link>
          					<Link href="/Service" className={styles.linkList}>
            						<div className={styles.services}>Services</div>
            						<img className={styles.vectorIcon2} alt="" src="/HomePageImage/blue arrow.svg" />
          					</Link>
          					<Link href="/MarketPlace" className={styles.linkList}>
            						<div className={styles.services}>Marketplace</div>
            						<img className={styles.vectorIcon2} alt="" src="/HomePageImage/blue arrow.svg" />
          					</Link>
          					<div className={styles.services}>Contact</div>
        				</div>
        				<div className={styles.buttonsSet}>
          					<div className={styles.masterPrimaryButton1}>
            						<b className={styles.services}>Connect Wallet</b>
          					</div>
          					<img className={styles.userIcon1} alt="" src="/HomePageImage/User.png" />
        				</div>
						<Link href="/">
        				<div className={styles.frameParent}>
          					<div className={styles.group5CopyParent}>
            						<img className={styles.group5Copy2} alt="" src="/HomePageImage/Group 5 Copy.svg" />
            						<div className={styles.healthParent}>
              							<div className={styles.health}>Health</div>
              							<div className={styles.chain}>Chain</div>
            						</div>
          					</div>
          					<div className={styles.pro}>Pro</div>
        				</div>
						</Link>
      			</div>
      			<div className={styles.container6}>
        				<div className={styles.ourCoreFeatures1}>How it works?</div>
          					<div className={styles.content}>
            						<div className={styles.row}>
              							<div className={styles.frame1}>
                								<div className={styles.tagParent}>
                  									<div className={styles.tag}>
                    										<b className={styles.pricing}>Step 1</b>
                  									</div>
                  									<div className={styles.nextStepParent}>
                    										<b className={styles.services}>Next Step</b>
                    										<img className={styles.expandRightIcon1} alt="" src="/HomePageImage/Expand_right.svg" />
                  									</div>
                								</div>
                								<div className={styles.frame2}>
                  									<div className={styles.frame3}>
                    										<div className={styles.intelligentHealthMetrics1}>Your Nearest Doctor</div>
                    										<div className={styles.ourPlatformEmploys1}>{`Select preferred doctor and time slot to book an in-clinic or video consultation. Its very easy and simple process to booking. `}</div>
                  									</div>
                  									<div />
                								</div>
												<Link href="/Service">
                								<div className={styles.buttonPrimaryIcon4}>
                  									<div className={styles.content1}>
                    										<div className={styles.text5}>Find Doctor now</div>
                  									</div>
                								</div>
												</Link>
              							</div>
            						</div>
            						<div className={styles.image16Parent}>
              							<img className={styles.image16Icon} alt="" src="/HomePageImage/image 16.png" />
              							<img className={styles.deviceIcon} alt="" src="/HomePageImage/Device.png" />
            						</div>
          					</div>
          					</div>
          					<div className={styles.latestNewsSection1}>
            						<div className={styles.container7}>
              							<div className={styles.content2}>
                								<div className={styles.oslerLatestNews1}>Stay Informed with HealthChain Pro</div>
												<Link href="https://www.thestar.com.my/news">
                								<div className={styles.buttonPrimaryIcon5}>
                  									<div className={styles.junParent}>
                    										<div className={styles.text5}>See All News</div>
                    										<img className={styles.expandRightIcon1} alt="" src="/HomePageImage/Solid arrow right sm.svg" />
                  									</div>
                								</div>
												</Link>
              							</div>
              							<div className={styles.cards}>
                								<div className={styles.frameGroup}>
                  									<div className={styles.frame4}>
                    										<div className={styles.content4}>
                      											<div className={styles.frame5}>
                        												<div className={styles.logomark}>
                          													<div className={styles.logoPillow16} />
                          													<div className={styles.logoPillow17} />
                          													<div className={styles.logoPillow18} />
                          													<div className={styles.logoPillow19} />
                        												</div>
                      											</div>
                      											<div className={styles.text7}>
                        												<div className={styles.frame6}>
                          													<div className={styles.frame7}>
                            														<div className={styles.jun}>sEPT 9, 2023</div>
                            														<div className={styles.oslerPillow4} />
                            														<div className={styles.jun}>john smith</div>
                          													</div>
                          													<div className={styles.oslerSAi}>Patient Data Privacy and</div>
                          													<div className={styles.frame8}>
                            														<div className={styles.tag1}>
                              															<b className={styles.pricing}>AI</b>
                            														</div>
                            														<div className={styles.tag2}>
                              															<b className={styles.pricing2}>Machine Learning</b>
                            														</div>
                          													</div>
                        												</div>
                      											</div>
                    										</div>
                  									</div>
                  									<div className={styles.frameWrapper}>
                    										<div className={styles.download1Parent}>
                      											<img className={styles.download1Icon} alt="" src="/HomePageImage/6172fbed62523be4be26f955d32df9ef.jpg" />
                      											<div className={styles.junParent}>
                        												<div className={styles.jun}>Oct 15, 2023</div>
                        												<div className={styles.jun}>Dr. araragi</div>
                      											</div>
                      											<div className={styles.oslerSAi1}>Blockchain's Role in Telehealth and Medication Management: The Future of Healthcare</div>
                      											</div>
                    										</div>
                  									</div>
                  									<div className={styles.frameGroup}>
                    										<div className={styles.frame4}>
                      											<div className={styles.content4}>
                        												<div className={styles.frame5}>
                          													<div className={styles.logomark}>
                            														<div className={styles.logoPillow16} />
                            														<div className={styles.logoPillow17} />
                            														<div className={styles.logoPillow18} />
                            														<div className={styles.logoPillow19} />
                          													</div>
                        												</div>
                        												<div className={styles.text7}>
                          													<div className={styles.frame6}>
                            														<div className={styles.frame7}>
                              															<div className={styles.jun}>sEPT 9, 2023</div>
                              															<div className={styles.oslerPillow4} />
                              															<div className={styles.jun}>john smith</div>
                            														</div>
                            														<div className={styles.oslerSAi}>Patient Data Privacy and</div>
                            														<div className={styles.frame8}>
                              															<div className={styles.tag1}>
                                																<b className={styles.pricing}>AI</b>
                              															</div>
                              															<div className={styles.tag2}>
                                																<b className={styles.pricing2}>Machine Learning</b>
                              															</div>
                            														</div>
                          													</div>
                        												</div>
                      											</div>
                    										</div>
                    										<div className={styles.groupDiv}>
                      											<div className={styles.download1Parent}>
                        												<img className={styles.image17Icon} alt="" src="/HomePageImage/db95240ac9bfb23170faf1e20e69e910.png" />
                        												<div className={styles.junParent}>
                          													<div className={styles.jun}>sEPT 9, 2023</div>
                          													<div className={styles.jun}>john smith</div>
                        												</div>
                        												<div className={styles.oslerSAi1}>Patient Data Privacy and Security in Healthcare: How HealthChain Pro Leads the Way</div>
                      											</div>
                    										</div>
                  									</div>
                  									<div className={styles.frameGroup}>
                    										<div className={styles.frame4}>
                      											<div className={styles.content4}>
                        												<div className={styles.frame5}>
                          													<div className={styles.logomark}>
                            														<div className={styles.logoPillow16} />
                            														<div className={styles.logoPillow17} />
                            														<div className={styles.logoPillow18} />
                            														<div className={styles.logoPillow19} />
                          													</div>
                        												</div>
                        												<div className={styles.text7}>
                          													<div className={styles.frame6}>
                            														<div className={styles.frame7}>
                              															<div className={styles.jun}>sEPT 9, 2023</div>
                              															<div className={styles.oslerPillow4} />
                              															<div className={styles.jun}>john smith</div>
                            														</div>
                            														<div className={styles.oslerSAi}>Patient Data Privacy and</div>
                            														<div className={styles.frame8}>
                              															<div className={styles.tag1}>
                                																<b className={styles.pricing}>AI</b>
                              															</div>
                              															<div className={styles.tag2}>
                                																<b className={styles.pricing2}>Machine Learning</b>
                              															</div>
                            														</div>
                          													</div>
                        												</div>
                      											</div>
                    										</div>
                    										<div className={styles.frameWrapper1}>
                      											<div className={styles.download1Parent}>
                        												<img className={styles.blockchainInHealthcareIndusIcon} alt="" src="/HomePageImage/2ef0043bcc6dff4c233d2a7ceb66578b.png" />
                        												<div className={styles.junParent}>
                          													<div className={styles.jun}>JULY 25, 2023</div>
                          													<div className={styles.jun}>author name</div>
                        												</div>
                        												<div className={styles.oslerSAi1}>NFTs in Healthcare: Collectibles, Certificates, and the Tokenization of Health Data</div>
                      											</div>
                    										</div>
                  									</div>
                  									<div className={styles.frameGroup}>
                    										<div className={styles.frame4}>
                      											<div className={styles.content4}>
                        												<div className={styles.frame5}>
                          													<div className={styles.logomark}>
                            														<div className={styles.logoPillow16} />
                            														<div className={styles.logoPillow17} />
                            														<div className={styles.logoPillow18} />
                            														<div className={styles.logoPillow19} />
                          													</div>
                        												</div>
                        												<div className={styles.text7}>
                          													<div className={styles.frame6}>
                            														<div className={styles.frame7}>
                              															<div className={styles.jun}>sEPT 9, 2023</div>
                              															<div className={styles.oslerPillow4} />
                              															<div className={styles.jun}>john smith</div>
                            														</div>
                            														<div className={styles.oslerSAi}>Patient Data Privacy and</div>
                            														<div className={styles.frame8}>
                              															<div className={styles.tag1}>
                                																<b className={styles.pricing}>AI</b>
                              															</div>
                              															<div className={styles.tag2}>
                                																<b className={styles.pricing2}>Machine Learning</b>
                              															</div>
                            														</div>
                          													</div>
                        												</div>
                      											</div>
                    										</div>
                    										<div className={styles.frameWrapper2}>
                      											<div className={styles.download1Parent}>
                        												<img className={styles.blockchainInHealthcare1Icon} alt="" src="/HomePageImage/f7ff568a906509065dacd7793d27bf45.jpg" />
                        												<div className={styles.junParent}>
                          													<div className={styles.jun}>Jun 25, 2023</div>
                          													<div className={styles.jun}>author name</div>
                        												</div>
                        												<div className={styles.oslerSAi1}>The Future of Telehealth: Exploring Virtual Reality in Healthcare</div>
                      											</div>
                    										</div>
                  									</div>
                								</div>
                								<div className={styles.carouselSlider}>
                  									<div className={styles.frame24}>
                    										<div className={styles.progressBarAtom1} />
                  									</div>
                  									<div className={styles.frame25}>
                    										<img className={styles.buttonIconFab} alt="" src="/HomePageImage/Button Icon FAB.png" />
                    										<img className={styles.buttonIconFab} alt="" src="/HomePageImage/Button Icon FAB (1).png" />
                  									</div>
                								</div>
              							</div>
            						</div>
            						<div className={styles.containerParent}>
              							<div className={styles.container8}>
                								<div className={styles.content8}>
                  									<img className={styles.contentChild} alt="" src="/HomePageImage/Group 1890.png" />
                  									<div className={styles.text11}>
                    										<div className={styles.tag9}>
                      											<b className={styles.pricing}>Sign Up Today</b>
                    										</div>
                    										<div className={styles.bookAFree1}>Book A Free Consultation.</div>
															<Link href="/ErrorPage">
                    										<div className={styles.buttonPrimaryIcon4}>
                      											<div className={styles.junParent}>
                        												<div className={styles.text5}>Download The App</div>
                        												<img className={styles.expandRightIcon1} alt="" src="/HomePageImage/Solid arrow right sm.svg" />
                      											</div>
                    										</div>
															</Link>
                  									</div>
                								</div>
              							</div>
              							<div className={styles.frameParent3}>
                								<div className={styles.textWrapper}>
                  									<div className={styles.group5CopyParent}>
                    										<img className={styles.group5Copy2} alt="" src="/HomePageImage/Group 5 Copy.svg" />
                    										<div className={styles.healthParent}>
                      											<div className={styles.health}>Health</div>
                      											<div className={styles.chain}>Chain</div>
                    										</div>
                  									</div>
                  									<div className={styles.pro}>Pro</div>
                								</div>
                								<div className={styles.footer}>
                  									<div className={styles.aboutParent}>
                    										<b className={styles.about}>About</b>
                    										<div className={styles.aboutUs}>About Us</div>
                    										<div className={styles.privacyPolicy}>Privacy Policy</div>
                    										<div className={styles.termsOfService1}>Terms of Service</div>
                  									</div>
                  									<div className={styles.quickLinksParent}>
                    										<b className={styles.about}>Quick Links</b>
                    										<div className={styles.findADoctor1}>Find a Doctor</div>
                    										<div className={styles.bookAnAppointment1}>Book an Appointment</div>
                    										<div className={styles.telehealthServices}>Telehealth Services</div>
                    										<div className={styles.medicationOrdering}>Medication Ordering</div>
                  									</div>
                  									<div className={styles.aCuttingEdgeHealthcareTechWrapper}>
                    										<div className={styles.aCuttingEdgeHealthcare1}>A cutting-edge healthcare technology company dedicated to revolutionizing the healthcare industry through the power of blockchain.</div>
                  									</div>
                  									<div className={styles.contactParent}>
                    										<b className={styles.contact1}>Contact</b>
                    										<div className={styles.div}>+012 3456789</div>
                    										<div className={styles.healthchainprogmailcom}>healthchainpro@gmail.com</div>
                    										<div className={styles.youtubeParent}>
                      											<img className={styles.youtubeIcon1} alt="" src="/HomePageImage/youtube.svg" />
                      											<img className={styles.youtubeIcon1} alt="" src="/HomePageImage/discord.svg" />
                      											<img className={styles.youtubeIcon1} alt="" src="/HomePageImage/instagram.svg" />
                    										</div>
                  									</div>
                								</div>
              							</div>
              							<div className={styles.copyright20231}>Copyright © 2023 HealthChainPro. All rights reserved.</div>
            						</div>
            						<div className={styles.homeInner}>
              							<div className={styles.containerGroup}>
                								<div className={styles.container9}>
                  									<div className={styles.textWrapper}>
                    										<div className={styles.text13}>
                      											<div className={styles.frame26}>
                        												<div className={styles.whereAiMeets}>Revolutionizing Healthcare with Blockchain</div>
                      											</div>
                    										</div>
                  									</div>
                								</div>
                								<div className={styles.weRePioneeringTheFutureOfParent}>
                  									<div className={styles.weRePioneering1}>Our mission is to make healthcare accessible and secure, providing you with telehealth services and a medication marketplace that's powered by the latest in blockchain technology. We prioritize your health, privacy, and convenience, offering a range of services to meet your needs.</div>
                    										<div className={styles.textWrapper}>
                      											<img className={styles.ethereumLogoLandscapeBlackIcon} alt="" src="/HomePageImage/5e6cedab96d4d8ce719e8a9c0b16b84a.png" />
                    										</div>
															<Link href="/ErrorPage">
                    										<div className={styles.buttonPrimaryIcon4}>
                      											<div className={styles.junParent}>
                        												<div className={styles.text5}>Download The App</div>
                        												<img className={styles.expandRightIcon1} alt="" src="/HomePageImage/Solid arrow right sm.svg" />
                      											</div>
                    										</div>
															</Link>
                  									</div>
                  									<img className={styles.groupChild} alt="" src="/HomePageImage/Group 1894.png" />
                								</div>
              							</div>
            						</div>);
            						};
            						
            						export default Home;
            						