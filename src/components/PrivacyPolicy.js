import React from "react";
import Logo from "./../assets/img/klout_original_logo.jpg";
import MockUp from "./../assets/img/hand-mockup.png";
import Showcase from "./../assets/img/showcase.png";
import Showcase2 from "./../assets/img/showcase2.png";
import Author1 from "./../assets/img/author/author1.jpg";
import Author2 from "./../assets/img/author/author2.jpg";
import QrCode from "./../assets/img/qr.svg";

import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="home_container">
      <header class="header sticky">
        <div class="container">
          <div class="row flexbox-center">
            <div class="col-lg-2 col-md-3 col-6">
              <div class="logo">
                <a href="#home">
                  <img src={Logo} alt="logo" />
                </a>
              </div>
            </div>
            <div class="col-lg-10 col-md-9 col-6">
              <div class="responsive-menu"></div>
              <div class="mainmenu">
                <ul id="primary-menu">
                  <li>
                    <Link class="appao-btn" to="/">
                      Go to Home
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- Hero Area --> */}
      <section class="hero-area" id="home">
        <div class="container">
          {/* <div class="row">
            <div class="col-lg-7">
              <div class="hero-area-content">
                <h1>Explore new markets with the superpower of networking</h1>
                <p>
                  Get in touch with founders and C-levels, earn Social Capital
                  points for helping each other and get support every step of
                  the way from the people who've already walked your path.
                </p>
                <a href="#" class="appao-btn">
                  Google Play
                </a>
                <a href="#" class="appao-btn">
                  App Store
                </a>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="hand-mockup text-lg-left text-center">
                <img src={MockUp} alt="Hand Mockup" />
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* <!-- About Klout --> */}
      <section class="about-area ptb-90">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div
                class="sec-title"
                style={{ maxWidth: "100%", textAlign: "left" }}
              >
                <h1>Privacy Policy</h1>
                <hr />
                <br />
                <h2>
                  {" "}
                  <strong>INTRODUCTION </strong>
                </h2>
                ​
                <p>
                  a. We, at Klout Club, aim to adhere to the ethical standards
                  pertaining to collection, usage and safeguarding of the
                  information provided by You during the use of the Application
                  and the Site and We do not sell any User information or data.
                </p>
                ​
                <p>
                  b. Insightner Marketing Services is a private limited company
                  incorporated under the Companies Act, 2013 and having its
                  Corporate Office at #10, Poorvi Marg, Dlf Phase 2, Gurgaon
                  122008, Haryana ("Company"; "We"; “Our”; “Klout"). We operate
                  and manage the website www.klout.club and the mobile
                  application for mobiles, smart devices and any other
                  compatible device (“Klout Club”) (collectively referred to as
                  the ‘Platform’).We respect Your privacy while You access the
                  Site and Application and other associated applications,
                  devices, products, online marketplace and services managed by
                  us that reference to this Privacy Policy.
                </p>
                ​
                <p>
                  c. For the purposes of this privacy policy the term “User(s)”
                  and wherever the context so requires “You”, “Your”, “Yourself”
                  shall mean any natural or legal person who accesses or uses
                  the Platform and in the event that a natural person is
                  representing a business entity, reference to such terms shall
                  include a reference to such business entity as well. The term
                  “Users” “You” or “Your” shall mean and include any other
                  persons/entity who has not created a User Account and are
                  accessing the Platform without such a User Account.
                </p>
                <p>
                  d. We, at our Company, aim to adhere to the ethical standards
                  pertaining to collection, usage and safeguarding of the
                  information provided by You during the use of the Site.
                </p>
                <p>
                  e. We have adopted this privacy policy (“Privacy Policy”) to
                  inform You of: (i) the information We collect from You through
                  the Platform; (ii) the manner of collection and processing of
                  such information; (iii) use of such information; (iv) the
                  steps We take to protect it; (v) what technology We use; and
                  (vi) what data protection rights You have and how You can
                  exercise it. Capitalized terms not defined herein shall have
                  the meaning ascribed to them in the Terms and Conditions
                  specified at Terms and Services. By using the Platform, You
                  unconditionally agree to the terms and conditions of this
                  Privacy Policy and consent to collecting, usage, storage,
                  processing, handling, transferring and sharing of the
                  information submitted by You in accordance with the terms
                  contained hereunder. Please read the Privacy Policy before
                  using the Platform and if You do not agree with the terms and
                  conditions of this Privacy Policy, please do not proceed
                  further to use this Platform. Please note that the capitalized
                  terms not defined under this Privacy Policy shall have the
                  same meaning as assigned to such terms in the Terms and
                  Conditions.
                </p>
                <br />
                <h3>
                  <strong> DATA WE COLLECT AND USAGE </strong>
                </h3>
                <p>
                  ​a. The information collected from the Users could be
                  categorized as (i) “Personal Information”, “Sensitive Personal
                  Information” (as defined under the IT Rules) or other
                  information and would be governed in accordance with the
                  Information Technology (Reasonable security practices and
                  procedures and sensitive personal data or information) Rules,
                  2011 (the “IT Rules”) and other relevant applicable laws of
                  the jurisdiction. Any such information collected from the
                  Users shall collectively be referred to as “User Information”
                  in this Privacy Policy.
                </p>
                <p>
                  {" "}
                  b. This User Information is readily available on the Site and
                  only viewable by the User on logging into the account. The
                  User at all times has the option not to provide this
                  information without agreeing to register with Klout Club.
                </p>
                <p>
                  {" "}
                  c. All User Information collected at the Site to become a
                  registered user is obtained purely for providing the Services
                  (please review the Terms and Conditions) and to improve the
                  quality of your experience from the Services.
                </p>
                <p>
                  {" "}
                  d. This Privacy Policy discloses the privacy practices of
                  Klout Club applicable to the handling of the User Information
                  collected at the Site.
                </p>{" "}
                <p>
                  e. We collect the User Information when You successfully
                  submit information while creating Your account and/or while
                  availing Our Services on Our Platform. While doing so, We may
                  collect data that can be used to uniquely identify or contact
                  a person and/or the business entity that a person represents
                  and shall include, but not be limited to, information
                  regarding Your name, name of the business entity that You
                  represent, address and telephone number of the business
                  entity, Your e-mail address, information associated to Your
                  social networking platform and such other information for the
                  purposes of identification and verification. We may also ask
                  You to share the one-time password (OTP) sent via SMS or a
                  password or to verify a link sent on Your e-mail address.
                  While You are using Our Platform, We record Your responses and
                  activity data, including but not limited to, textual and voice
                  responses and session details. We do not directly process any
                  payments and do not store Your debit/credit card information.
                  Secured socket layer technology is used for processing payment
                  transactions with third party service provider partners. When
                  You submit User Information on the Platform, it shall be
                  deemed that You have granted Us the right to collect, store,
                  process, handle and use such User Information, in accordance
                  with this Privacy Policy (as amended from time to time).
                </p>{" "}
                <p>
                  f. While availing certain Services, We may ask permission to
                  access the microphone and the camera for providing better
                  services and products. We may ask for permission to access
                  Your data storage. However, the data storage access shall be
                  limited to the access to store the data downloaded or saved
                  during the usage of the Platform or the products directly in
                  the User’s device for ensuring easy storage and access to the
                  User. We shall not utilize this permission to access to any
                  other data on the User’s device, except as expressly mentioned
                  in this Privacy Policy.
                </p>{" "}
                <p>
                  g. By registering with the Site and consenting to Terms and
                  Conditions and related policies at the Site, User agrees and
                  confirms his/ her consent to providing Klout Club this
                  information, which is lawful, necessary and permissible. Our
                  products or services may include third-party products or
                  services. When you use these products or services, they may
                  also collect and use your information to serve you. User at
                  all times has the right to withdraw consent by communicating
                  it to Klout Club or discontinuing use of the Site and Services
                  offered by Klout Club. Upon the User opting outing to withdraw
                  such consent Klout Club will not be under any obligations to
                  provide the Services nor will it be liable for the Services
                  provided till then.
                </p>{" "}
                <p>
                  h. We may use the User Information to contact You from time to
                  time, to provide You with the Services We offer through the
                  Platform, important information and circulate marketing and
                  promotional material in relation thereto. We may ask You for
                  more information for identification purposes, if required
                  (personal information). The User shall be permitted to access
                  the Platform via any device provided that the log in/access
                  credentials match with the User credentials. In the event the
                  User uses a new device to access or log-in to the Platform,
                  the User shall be required to grant access for the new device,
                  as may be required
                </p>{" "}
                <p>
                  i. You may visit the Platform and browse the Platform without
                  having to provide User Information. We will, at all times,
                  provide the option to You to not provide the User Information,
                  which We seek from You. Where possible, We indicate which
                  fields are mandatory and which fields are optional to be
                  filled on the Platform. You always have the option to not
                  provide User Information by choosing not to submit particular
                  information or feature on the Platform. In such event,
                  however, the Company fully reserves the right not to allow
                  further usage of the Platform or provide any Services
                  thereunder to You.
                </p>{" "}
                <p>
                  j. By using this Platform, You consent to the collection,
                  storage, use and transfer of the User Information that You
                  provide in connection with any of the Services that We offer
                  through our Platform, and You consent to Our collection of any
                  changes or updates that You may provide to the User
                  Information. We collect only such User Information that We
                  believe to be relevant for the purpose of identification and
                  verification and is required to understand You or Your
                  interests. It is clarified that We shall not be liable, for
                  any reason whatsoever, for the authenticity of any User
                  Information provided by You to Us. You hereby confirm that the
                  User Information provided by You is and shall continue to be
                  valid, true and accurate to the best of Your knowledge.
                </p>{" "}
                <p>
                  k. We may also collect information regarding Your location,
                  age, and gender and contacts that shall include, but not
                  limited to, their name and phone number. This information will
                  not be sold to, or shared with, any unaffiliated third party.
                </p>{" "}
                <p>
                  m. Any portion of the User Information containing personal
                  data relating to minors or a person of unsound mind provided
                  by You shall be deemed to be given with the consent of the
                  legal guardian. Such consent is deemed to be provided by Your
                  registration with us.
                </p>{" "}
                <p>
                  n. When you download create an account on the Platform, we may
                  collect certain information about You, such as: Name Username
                  Email address Mobile number Gender identity Date of birth
                  Photographs Location Login information for social media
                  accounts that You connect to Your account on the Platform
                  (this could include, for example, Your Facebook and Instagram
                  accounts); and Other data collected that could directly or
                  indirectly identify You.
                </p>{" "}
                <p>
                  o.Automatically Collected Information: When You visit the
                  Platform, We may collect certain non-personal information such
                  as Your internet protocol address, operating system, browser
                  type, and internet service provider. This type of information
                  does not identify You personally during Your visit to the
                  Platform. We can identify You only after You submit User
                  Information at the time of registering Yourself with the
                  Platform.
                </p>
                <br />
                <h3>
                  <strong>COLLECTION OF INFORMATION</strong>
                </h3>
                <p>
                  {" "}
                  ​a. The User Information is being collected by the Company and
                  the Company will delete any User Information upon the User
                  withdrawing the consent in writing, however, upon the
                  withdrawal of the consent by the User, the Company may, at its
                  option, not provide any Services for which the User
                  Information was sought, and the User shall not claim
                  deficiency of services on the basis of such non provision of
                  Services.
                </p>{" "}
                <p>
                  b. To enhance Your use of the Platform, certain information
                  may be collected each time You visit the Platform which are
                  saved in server logs. It is clarified that these statistics
                  help Us in improving the efficiency of the Platform by giving
                  Us information relating to Your use of the Platform. Such User
                  Information may include details of the server from where the
                  Platform is being accessed, the browser and operating system
                  used to browse the Platform, details of Your last visit to the
                  Platform, including time, date and the duration of Your
                  session on the Platform. This User Information is used by us
                  to understand the number of users visiting the Platform and
                  gather broad demographic information for aggregate use of the
                  Platform. While collecting such User Information, Your
                  anonymity shall be maintained at all times and at no time can
                  We identity You personally, unless You submit the User
                  Information on the Platform or through the e-mail feature. We
                  reserve the right to share such general information to any
                  person on its discretion.
                </p>{" "}
                <p>
                  c. You acknowledge that apart from Your User Information, if
                  You upload or exchange any data, content, information,
                  pictorial representations and/or images including post any
                  comments on the Platform (collectively referred to as the
                  “Content”), such Content may contain information including
                  User Information and the same may be available to the other
                  Users of the Platform. We will not be liable for the
                  disclosure and dissemination of such User Information on the
                  Platform.​
                </p>{" "}
                <br />
                <h3>
                  <strong>COOKIES</strong>
                </h3>
                <p>
                  {" "}
                  ​a. Like most other platforms, We use data collection devices
                  known as cookies to collect and store information of Users
                  visiting the Platform. A cookie is a small amount of data that
                  is sent to a User’s browser from a web server/mobile
                  application and is eventually stored on a User's computer hard
                  drive/mobile device. Cookies are a reliable mechanism for
                  Platform to remember the activities of the User on the
                  Platform and helps in improving Your experience on the
                  Platform. This anonymous information is maintained distinctly
                  and is not linked to the User Information You submit to Us.
                  The option of accepting cookies is up to You, however certain
                  features of the Platform including Content and the forms may
                  not be accessible without accepting cookies.
                </p>{" "}
                <p>
                  b. To browse anonymously, You may set Your browser to disable
                  cookies or delete cookies. Additionally, You may encounter
                  cookies or other similar devices on certain pages of the
                  Platform that are placed by third parties. We do not control
                  the use of cookies by third parties and shall not be liable
                  for any reason whatsoever for these third-party cookies.
                </p>
                <br />​{" "}
                <h3>
                  <strong>DATA NOT PROCESSES To browse</strong>
                </h3>
                <p>
                  anonymously, You may set Your browser to disable cookies or
                  delete cookies. Additionally, You may encounter cookies or
                  other similar devices on certain pages of the Platform that
                  are placed by third parties. We do not control the use of
                  cookies by third parties and shall not be liable for any
                  reason whatsoever for these third-party cookies.
                </p>
                <br />
                <h3>
                  <strong>USE OF THE USER INFORMATION</strong>
                </h3>
                <p>
                  {" "}
                  We collect the User Information provided by You for the
                  reasons including but not limited to the following:
                </p>
                <p>
                  a. To analyse and draw trends from the aggregated statistics
                  of the User activity;
                </p>
                <p>
                  b. To provide personalised recommendations and maintain
                  general and personalised content;
                </p>
                <p>
                  c. Identification and authentication of Your use of Company
                  Services;
                </p>
                <p>d. To improve Our features and provide seamless Service;</p>
                <p> e. To conduct research, to administer the Services;</p>
                <p> f. To undertake promotional activities and/or contest;</p>
                <p>
                  {" "}
                  g. To send You relevant notifications through e-mails and SMS
                  which add to the effectiveness of the Service;
                </p>
                <p> h. To help in detecting and preventing of fraud;</p>
                <p> i. To analyse and monitor activity on Our Platform;</p>
                <p> j. To respond to any queries/doubts raised by You;</p>
                <p>
                  {" "}
                  k. To protect against imminent harm to the rights, property or
                  safety of the Platform / Company or its users or the public as
                  required or permitted by law;
                </p>
                <p>
                  {" "}
                  l. To send periodic emails for sharing information and updates
                  pertaining to occasional company news, updates, related
                  product or service information, etc.
                </p>
                <p> m. Verifying Your identity.​</p>
                <br />
                <h3>
                  <strong> DISCLOSURE THE USER INFORMATION</strong>
                </h3>
                <p>
                  {" "}
                  ​a. The User Information may be disclosed to affiliated
                  companies within Our corporate family, with third parties with
                  which We have partnered to allow You to integrate their
                  services into Our own Services, and with trusted third party
                  service providers as necessary for them to perform services
                  such as: ​Processing credit/debit card payments; Serving
                  advertisements; Conducting contests or surveys; Performing
                  analysis of Our Services and customers demographics;
                  Communicating with You, such as by way email or survey
                  delivery; Customer relationship management; Security, risk
                  management and compliance; Recruiting support and related
                  services. In view of the same, You may be subject to the
                  practices of such third parties as well.
                </p>
                <p>
                  b. You acknowledge and agree that in the event You have
                  availed Our Services through a third-party affiliate, We may
                  disclose the User Information to such third parties. Further,
                  such a third-party affiliate will have access to the account
                  of the end user.
                </p>
                <p>
                  c. Except as provided under this Privacy Policy, We shall
                  disclose the User Information only under the circumstances
                  where the User has provided express instructions or consent
                  towards such disclosure.
                </p>
                <br />
                <h3>
                  <strong>
                    ​ THIRD PARTY PAYMENT SERVICES AND USER INFORMATION
                    COLLECTION
                  </strong>
                </h3>
                <p>
                  {" "}
                  ​a. We use a third-party payment platform and payment
                  aggregator services to bill You for Our Services. We may use
                  and share the User Information with reliable and reputed
                  third-party payment gateway to whom We are associated in order
                  to ensure swift and comfortable payment mechanism for the
                  User. The third-party service providers shall provide the
                  Company the name of the User, phone number, subscription
                  details, details of the last four digits of the credit card
                  used for payment, email ID and the address of the User as
                  utilized by the User while completing the payment transaction.
                </p>
                <p>
                  {" "}
                  b. We use a third-party payment platform and payment
                  aggregator services to bill You for Our Services. We may use
                  and share the User Information with reliable and reputed
                  third-party payment gateway to whom We are associated in order
                  to ensure swift and comfortable payment mechanism for the
                  User. The third-party service providers shall provide the
                  Company the name of the User, phone number, subscription
                  details, details of the last four digits of the credit card
                  used for payment, email ID and the address of the User as
                  utilized by the User while completing the payment transaction.
                </p>
                <p>
                  c. After either the User is directed to the payment mechanism
                  and the payment gateway or the payment is undertaken via the
                  Site as specified in sub-clause (B) above, the Company is not
                  liable for any data stored, used or accessed by such a
                  third-party service provider and the User Information is no
                  longer governed by this Privacy Policy or Our Terms and
                  Conditions. The same shall be subject to the terms and
                  conditions and privacy policy of the third-party service
                  provider. For these third-party service providers, we
                  recommend that You read their privacy policies in order to
                  understand the manner in which Your User Information and Your
                  credit/debit card details will be handled by these providers.​
                  SHARING OF DATA WITH THIRD PARTIES a. We will share Your User
                  Information with third parties only in the ways that are
                  described in this Privacy Policy. We may use the individual
                  data and behaviour patterns combined with User Information to
                  provide You with personalized content, and better Your
                  experience learning objectives.​
                </p>
                <p>
                  b. The Company may provide and utilise the User Information
                  and data collected to certain third parties for undertaking
                  data analysis via third party analytical tools. The
                  third-party analytical tools are utilised in order to analyse
                  the data and information to personalize, drive insights and
                  thereby provide a better performance, improve the quality of
                  features and provide seamless Services to the User.
                </p>
                <p>
                  {" "}
                  c. The Company does not sell, trade or rent the User
                  Information to any third party unless, we have been expressly
                  authorized by You either in writing or electronically to do
                  so.​{" "}
                </p>
                <br />
                <h3>
                  <strong> SECURITY PRECAUTIONS ​</strong>
                </h3>
                <p>
                  a. To prevent any form of unlawful interception or misuse of
                  User Information, We use reasonable physical, electronic, and
                  managerial procedures to safeguard and secure the User
                  Information collected. We use reasonably secure and
                  technologically appropriate measures, in compliance with
                  Information Technology Act, 2000 and IT Rules related thereto
                  and other relevant applicable laws of the jurisdiction to
                  protect You against loss or misuse of Your User Information
                  including internal reviews of data collection, storage and
                  processing practices and other reasonable security measures
                  which are equivalent to security measures that We use to
                  protect Our own confidential information. We have in place a
                  secure server for all Your transactions on the Platform,
                  which, if required to be accessed, are accessible only by Our
                  authorized personnel. However, as You are aware, no internet
                  site/mobile based application is completely free of security
                  risks, and We do not make any representation in respect of the
                  same.
                </p>
                <p>
                  {" "}
                  b. We do not warrant that Our Platform or any electronic
                  communication made by Us is free from virus or other harmful
                  effects. In the event of any errors in transmission or in the
                  event of Our Platform being inaccessible due to an act of any
                  third party or due to any outage, or any technical or
                  technological failure, or similar reasons beyond Our control,
                  We shall not be held liable or responsible for any losses/
                  damages incurred by You, and You agree that you will not have
                  any claims against us regarding the same. You explicitly agree
                  that Your use of the Platform and/or services is at Your own
                  individual risk. You agree and confirm that Your User
                  Information may be collected, used, transferred, processed and
                  stored in the manner stipulated in this Privacy Policy. You
                  hereby confirm that You have been made aware of the security
                  measures undertaken by Us and You expressly consent to Us
                  collecting, storing, handling, processing and using Your User
                  Information.
                </p>
                <p>
                  c. All supplied sensitive User Information is transmitted via
                  Secure Socket Layer (SSL) technology and then encrypted into
                  Our Payment gateway providers database only to be accessible
                  by those authorized with special access rights to such systems
                  and are required to keep the information confidential. After a
                  transaction, Your User Information (credit cards, social
                  security numbers, financials, etc.) will not be stored on Our
                  servers. While We have mechanisms in place to safeguard Your
                  User Information after We receive it, no transmission of data
                  over the internet can be fully secure and We make no
                  representation in respect of the same.​
                </p>
                <br />
                <h3>
                  <strong>LINKS TO THIRD-PARTY WEBSITES</strong>
                </h3>
                <p>
                  The Platform may provide third-party information and links to
                  other platforms that are not affiliates of or operated or
                  controlled by Us including but not limited to payment gateways
                  or social networking platforms. We are not responsible for any
                  form of transmission, whatsoever, received by You from any
                  third-party platform and accordingly do not make any
                  representations concerning the privacy practices or other
                  policies of such third-party Platforms. Under no circumstances
                  shall We be deemed to control or guarantee the accuracy,
                  integrity, or quality of the information, data, text,
                  software, sound, photographs, graphics, videos, cookies,
                  messages or other materials available on such platforms. Any
                  User Information provided by You to such third-party platforms
                  shall be governed in accordance with the privacy policies of
                  such platforms and it is recommended that You review the
                  privacy policy of such platforms prior to using such
                  platforms.
                </p>
                <br />
                <h3>
                  <strong>AGGREGATE STATISTICS</strong>
                </h3>
                <p>
                  We may at times provide aggregate statistics about Our Users
                  and their pattern in addition to certain related site
                  information to certain third parties will be in an aggregate
                  form and does not contain any of Your individual detailed User
                  Information.{" "}
                </p>
                <br />
                <h3>
                  <strong>DATA RETENTION </strong>
                </h3>
                <p>
                  {" "}
                  Once You delete the User Information through Your account
                  settings such as name and e-mail address on the Site, this
                  deleted information is not stored in any form at Our end. You
                  have every right to cease to hold an account with Us. However,
                  the past activity data associated with Your account is intact
                  in anonymous form with Us and We may utilise it for research
                  and analysis purposes in order to improve the quality of Our
                  Services.{" "}
                </p>
                <br />
                <h3>
                  <strong>CHILDREN'S PRIVACY PROTECTION</strong>
                </h3>
                <p>
                  {" "}
                  The Service is not for or directed towards children. While the
                  Service is not intended for anyone under the age of 18
                  (Eighteen) years, We do not intend to and will not knowingly
                  collect any User Information from children under the age of 13
                  (Thirteen) years. Children under the age of 13 (Thirteen)
                  years are prohibited from using the Services. If We learn that
                  We have collected information from a child under the age of 13
                  (Thirteen) years, We will remove that information immediately
                  and delete it from Our server (subject to applicable law and
                  this Privacy Policy). If You believe content from a child
                  under the age of 13 (Thirteen) years has been posted to the
                  Services, please notify us by contacting us at
                  value@KloutClub.com .
                </p>
                <br />
                <h3>
                  <strong>CHANGE IN PRIVACY POLICY</strong>
                </h3>
                <p>
                  {" "}
                  We reserve the right to update, modify and amend any of the
                  terms of Our Privacy Policy, at any time without prior
                  intimation to You. We will post these changes on Our Platform
                  for Your information. These changes will become effective
                  immediately on posting. We shall not be liable for any failure
                  or negligence on Your part to review the updated Privacy
                  Policy before accessing or availing the Platform for availing
                  the services. Your continued use of the Platform, following
                  changes to the Privacy Policy, will constitute Your acceptance
                  of those changes.
                </p>
                <br />
                <h3>
                  <strong> DISCLOSURES REQUIRED BY LAW</strong>
                </h3>
                <p>
                  {" "}
                  We reserve the right to disclose User Information when
                  required by any applicable law. We will disclose such User
                  Information wherein We have a good-faith belief that it is
                  necessary to comply with a court order, ongoing judicial
                  proceeding, or other legal process served on Us from any
                  jurisdiction as may have been applicable to Us by virtue of
                  the location of the User of the Services or to exercise Our
                  legal rights or defend against legal claims.
                </p>
                <br />
                <h3>
                  <strong>
                    CONTACTING THE PLATFORM AND DATA PROTECTION
                    OFFICER/GRIEVANCE OFFICER
                  </strong>
                </h3>
                <p>
                  ​a. If You have any questions or comments regarding (i) this
                  Privacy Policy, or (ii) practices of this Platform, or (iii)
                  Your dealings with this Platform or believe that We have not
                  adhered to it or (iv) if You wish to exercise Your individual
                  rights,
                  <br />
                  please contact us as below:
                  <br />
                  Name - Support
                  <br />
                  Klout Club
                  <br />
                  Email - value@klout.club
                  <br />
                  Address-
                  <br />
                  #10, Poorvi Marg,
                  <br />
                  Dlf Phase 2, Gurgaon 122008,
                  <br /> Haryana
                </p>
                <p>
                  b. Email - value@klout.club <br />
                  Address- #10, Poorvi Marg, Dlf Phase 2, Gurgaon 122008,
                  Haryana
                </p>
                <p>
                  c. Our data protection officer/ grievance officer or another
                  data protection relevant officer can be reached at the email
                  provided.
                </p>
                <p>
                  d. The data protection officer/grievance officer is identified
                  above pursuant to the provisions of applicable laws including
                  but not limited to the Information Technology Act, 2000.​{" "}
                </p>
                <br />
                <h3>
                  <strong>UPDATION/DELETION OF THE USER INFORMATION </strong>
                </h3>
                <p>
                  Once you update/delete Your personal User Information through
                  Your account settings such as name and e-mail address on the
                  Site or the mobile application, this old/deleted information
                  shall be deleted from Our database within 30 days from the
                  date of the updation/ deletion. After expiry of the said
                  period, the old/ deleted User Information is not stored in any
                  form at Our end. You have every right to cease to hold an
                  account with us. However, the past activity data associated
                  with Your account is intact in anonymous form with us and We
                  may utilise it for research and analysis purposes in order to
                  improve the quality of Our Services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer class="footer" id="contact">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="subscribe-form">
                <form action="#">
                  <input type="text" placeholder="Your email address here" />
                  <button type="submit">Subcribe</button>
                </form>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="copyright-area">
                <ul>
                  <li>
                    <a href="#">
                      <i class="icofont icofont-social-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icofont icofont-social-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icofont icofont-brand-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icofont icofont-social-pinterest"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icofont icofont-social-google-plus"></i>
                    </a>
                  </li>
                </ul>
                <p>
                  Copyright &copy; 2023-24 All rights reserved | The Klout Club
                  is made with &nbsp;
                  <i class="fa fa-heart-o" aria-hidden="true"></i> by &nbsp;
                  <a href="https://insightner.com/" target="_blank">
                    Insightner
                  </a>
                </p>

                <p>
                  <a href="/privacy-policy" target="_blank">
                    Privacy Policy
                  </a>
                  &nbsp; | &nbsp;
                  <a href="/terms-and-condition" target="_blank">
                    Terms and Conditions
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
