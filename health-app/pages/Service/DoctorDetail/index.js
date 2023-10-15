import styles from './index.module.css';
import Link from 'next/link';

const DoctorDetails = () => {
  	return (
    		<div className={styles.doctorDetails}>
      			<div className={styles.headersV5}>
        				<div className={styles.container2} />
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
          					<div className={styles.home}>Contact</div>
        				</div>
        				<div className={styles.buttonsSet}>
          					<div className={styles.masterPrimaryButton1}>
            						<b className={styles.home}>Connect Wallet</b>
          					</div>
          					<img className={styles.userIcon1} alt="" src="/HomePageImage/User.png" />
        				</div>
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
      			</div>
      			<div className={styles.ourCoreFeatures1}>Doctor Details</div>
      			<img className={styles.vectorIcon6} alt="" src="/ServicePageDetailsImage/.svg" />
      			<div className={styles.frame}>
        				<div className={styles.frameGroup}>
          					<div className={styles.frameDiv}>
            						<div className={styles.istockphoto1330046035612x612Wrapper}>
              							<img className={styles.istockphoto1330046035612x612Icon} alt="" src="/ServicePageDetailsImage/istockphoto-1330046035-612x612 1.png" />
            						</div>
            						<div className={styles.buttonPrimaryIconParent}>
              							<div className={styles.buttonPrimaryIcon3} />
              							<div className={styles.vectorParent}>
                								<img className={styles.vectorIcon7} alt="" src="/ServicePageDetailsImage/Vector (2).svg" />
                								<img className={styles.socialIcons2} alt="" src="/ServicePageDEtailsImage/Social Icons.png" />
                								<img className={styles.socialIcons3} alt="" src="/ServicePageDEtailsImage/Social Icons (1).png" />
              							</div>
            						</div>
          					</div>
          					<div className={styles.frameParent1}>
            						<div className={styles.frameParent2}>
              							<div className={styles.frameWrapper}>
                								<div className={styles.oslerSAiDrivenTelehealthBParent}>
                  									<div className={styles.oslerSAi}>Dr. Linda Walker</div>
                  									<div className={styles.pricing}>General Practitioner | Sunway Medical Centre</div>
                  									<div className={styles.heightCardParent}>
                    										<div className={styles.heightCard}>
                      											<div className={styles.heightText}>
                        												<div className={styles.starParent}>
                          													<img className={styles.frameChild} alt="" src="/ServicePageDetailsImage/Star 5.svg" />
                          													<div className={styles.div}>4.8</div>
                        												</div>
                        												<div className={styles.rating}>Rating</div>
                      											</div>
                    										</div>
                    										<div className={styles.heightCard1}>
                      											<div className={styles.heightText1}>
                        												<div className={styles.y}>10Y+</div>
                        												<div className={styles.experience}>Experience</div>
                      											</div>
                    										</div>
                    										<div className={styles.heightCard1}>
                      											<div className={styles.heightText2}>
                        												<div className={styles.y}>180+</div>
                        												<div className={styles.patients}>Patients</div>
                      											</div>
                    										</div>
                  									</div>
                								</div>
              							</div>
              							<div className={styles.drLindaWalkerContainer}>
                								<p className={styles.sheIsHighly}>Dr. Linda Walker has been practicing medicine for over 10 years.</p>
                								<p className={styles.sheIsHighly}>She is highly experienced in providing comprehensive healthcare services for patients of all ages.</p>
              							</div>
										<Link href="/Service/BookConsultation">
              							<div className={styles.buttonPrimaryIcon4}>
                								<div className={styles.content}>
                  									<div className={styles.text7}>
                    										<p className={styles.sheIsHighly}>
                      											<span className={styles.span}>
                        												<span>Book Consultation</span>
                      											</span>
                    										</p>
                    										<p className={styles.ethConsult}>
                      											<span className={styles.span}>
                        												<span>{`( `}</span>
                      											</span>
                      											<span>
                        												<b className={styles.eth}>0.01 ETH</b>
                        												<span className={styles.consult}>
                          													<span className={styles.span1}>{` `}</span>
                          													<span className={styles.consult1}>/ consult</span>
                          													<span className={styles.span1}> )</span>
                        												</span>
                      											</span>
                    										</p>
                  									</div>
                								</div>
              							</div>
										</Link>
            						</div>
            						<div className={styles.frameItem} />
            						<div className={styles.frameParent3}>
              							<div className={styles.workingInformationWrapper}>
                								<div className={styles.workingInformation}>Working Information</div>
              							</div>
              							<div className={styles.frameParent4}>
                								<div className={styles.iconCalendarParent}>
                  									<img className={styles.iconCalendar1} alt="" src="/ServicePageDetailsImage/Icon_Calendar.png" />
                  									<div className={styles.mondayFriday1}>Monday - Friday, 08:00 AM - 21:00 PM</div>
                								</div>
                								<div className={styles.iconLocationParent}>
                  									<img className={styles.iconCalendar1} alt="" src="/ServicePageDetailsImage/Icon_Location.png" />
                  									<div className={styles.jalanLagoonSelatan1}>5, Jalan Lagoon Selatan, Bandar Sunway, 47500 Subang Jaya, Selangor</div>
                								</div>
              							</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.content1}>
          					<div className={styles.frame1}>
            						<div className={styles.logomark}>
              							<div className={styles.logoPillow4} />
              							<div className={styles.logoPillow5} />
              							<div className={styles.logoPillow6} />
              							<div className={styles.logoPillow7} />
            						</div>
          					</div>
          					<div className={styles.text8}>
            						<div className={styles.frame2}>
              							<div className={styles.frame3}>
                								<div className={styles.jun}>sEPT 9, 2023</div>
                								<div className={styles.oslerPillow1} />
                								<div className={styles.jun}>john smith</div>
              							</div>
              							<div className={styles.oslerSAi1}>Patient Data Privacy and</div>
              							<div className={styles.frame4}>
                								<div className={styles.tag}>
                  									<b className={styles.text7}>AI</b>
                								</div>
                								<div className={styles.tag1}>
                  									<b className={styles.pricing2}>Machine Learning</b>
                								</div>
              							</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.frameParent5}>
        				<div className={styles.reviewsParent}>
          					<b className={styles.reviews}>Reviews</b>
          					<div className={styles.seeAll}>SEE ALL</div>
        				</div>
        				<div className={styles.frameParent6}>
          					<div className={styles.frameParent7}>
            						<div className={styles.iconEditParent}>
              							<div className={styles.iconEdit2} />
              							<div className={styles.rectangle2Copy7Parent}>
                								<img className={styles.rectangle2Copy71} alt="" src="/ServicePageDetailsImage/Rectangle 2 Copy 7.png" />
                								<div className={styles.samantha}>Samantha</div>
                								<div className={styles.starGroup}>
                  									<img className={styles.frameChild} alt="" src="/ServicePageDetailsImage/Star 6.svg" />
                  									<div className={styles.div2}>4.8</div>
                								</div>
              							</div>
            						</div>
            						<div className={styles.drJennieThorn2}>{`Dr. Jennie Thorn is the most immunologists specialist in Royal Hospital at Phnom penh. She achieved several awards for her wonderful contributing in medical field. She is available for private consultation.   `}</div>
          					</div>
          					<div className={styles.frameParent8}>
            						<div className={styles.iconEditParent}>
              							<div className={styles.iconEdit2} />
              							<div className={styles.rectangle2Copy7Parent}>
                								<img className={styles.typedefaultComponentavatarIcon} alt="" src="/ServicePageDetailsImage/Type=Default, Component=Avatar.png" />
                								<div className={styles.samantha}>Chare Holu</div>
                								<div className={styles.starContainer}>
                  									<img className={styles.frameChild} alt="" src="/ServicePageDetailsImage/Star 6.svg" />
                  									<div className={styles.div3}>5</div>
                								</div>
              							</div>
            						</div>
            						<div className={styles.drJennieThorn3}>{`Dr. Jennie Thorn is the most immunologists specialist in Royal Hospital at Phnom penh. She achieved several awards for her wonderful contributing in medical field. She is available for private consultation.   `}</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.containerParent}>
        				<div className={styles.container3}>
          					<div className={styles.content2}>
            						<img className={styles.contentChild} alt="" src="/HomePageImage/Group 1890.png" />
            						<div className={styles.text9}>
              							<div className={styles.tag2}>
                								<b className={styles.text7}>Sign Up Today</b>
              							</div>
              							<div className={styles.bookAFree1}>Book A Free Consultation.</div>
              							<div className={styles.buttonPrimaryIcon5}>
                								<div className={styles.content3}>
                  									<div className={styles.text10}>Download The App</div>
                  									<img className={styles.solidArrowRightSm1} alt="" src="/HomePageImage/Solid arrow right sm.svg" />
                								</div>
              							</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.frameParent9}>
          					<div className={styles.frameParent10}>
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
              							<div className={styles.div4}>+012 3456789</div>
              							<div className={styles.healthchainprogmailcom}>healthchainpro@gmail.com</div>
              							<div className={styles.youtubeParent}>
                								<img className={styles.youtubeIcon1} alt="" src="/ServicePageDetailsImage/youtube.png" />
                								<img className={styles.youtubeIcon1} alt="" src="/ServicePageDetailsImage/discord.png" />
                								<img className={styles.youtubeIcon1} alt="" src="/ServicePageDetailsImage/instagram.png" />
              							</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.copyright20231}>Copyright © 2023 HealthChainPro. All rights reserved.</div>
      			</div>
    		</div>);
};

export default DoctorDetails;
