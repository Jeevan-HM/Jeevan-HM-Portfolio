export default function App() {
  return (
    <div className='app-container'>

      <div className="navbar navbar-expand-lg bg-dark navbar-dark">
        <a href="/" className="navbar-brand"><span className="brand-letter">J</span>eevan H M</a>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
          <ul className="navbar-nav">
            <li className="nav-item active"><a href="#home" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
            <li className="nav-item"><a href="#skills" className="nav-link">Skills</a></li>
            <li className="nav-item"><a href="#experience" className="nav-link">Experience</a></li>
            <li className="nav-item"><a href="#volunteering" className="nav-link">Volunteering</a></li>
            <li className="nav-item"><a href="#portfolio" className="nav-link">Portfolio</a></li>
            <li className="nav-item"><a href="#publications" className="nav-link">Publications</a></li>
            <li className="nav-item"><a href="#review" className="nav-link">Recommendation</a></li>
            <li className="nav-item"><a href="#blog" className="nav-link">Reviews</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </div>
      </div>
      {/* Nav Bar End */}

      {/* Hero Start */}
      <div className="hero" id="home">
        <div className="hero-overlay"></div>
        <div className="container-fluid">
          <div className="row hero-row align-items-center">
            <div className="col-lg-6 col-md-8 col-sm-12">
              <div className="hero-content">
                <div className="hero-text">
                  <p className="hero-intro">I'm</p>
                  <h1 className="hero-name">Jeevan Hebbal Manjunath</h1>
                  <h2 className="hero-typed"></h2>
                  <div className="typed-text">
                    Robotics Engineer, AI Engineer, Machine Learning Engineer,
                    NLP Engineer, Computer Vision Engineer
                  </div>
                </div>
                <div className="hero-btn">
                  <a className="btn" href="#contact">Contact Me</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hero End */}

      {/* About Start */}
      <div className="about wow fadeInUp" data-wow-delay="0.5s" id="about">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <img src="/images/about.jpg" alt="Portfolio Item Image" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-header text-left">
                  <p>Learn About Me</p>
                  <h2>Jeevan H M</h2>
                </div>
                <div className="about-text">
                  <p>
                    Passionate robotics engineer advancing autonomous systems through cutting-edge research in sensor
                    fusion,
                    learning-based control, and real-world deployment. Currently pursuing M.S. in Robotics & Autonomous
                    Systems
                    at Arizona State University (GPA: 3.78/4.0), where I architect end-to-end robotic solutions—from data
                    acquisition pipelines to reinforcement learning policies that bridge the sim-to-real gap. My journey
                    blends
                    academic rigor with hands-on industry experience: I've productionized computer vision services
                    processing
                    1,700+ satellite images, engineered intelligent chatbots with retrieval guardrails, and spearheaded
                    multi-university collaborations advancing pneumatic control systems. Fluent in Python, C++, ROS/ROS 2,
                    PyTorch, and cloud infrastructure, I thrive at the intersection of theory and practical impact.
                  </p>
                </div>
                <div className="about-text">
                  <h3>Education</h3>
                  <p>
                    <strong>Arizona State University</strong> - M.S., Robotics & Autonomous Systems<br />
                    <em>GPA: 3.78/4.0 | Expected May 2026</em>
                  </p>
                  <p>
                    <strong>Visvesvaraya Technological University</strong> - B.E., Electronics & Communication
                    Engineering<br />
                    <em>CGPA: 8.83/10.0 (approx. 3.8/4.0) | Ranked First in the University | June 2023</em>
                  </p>
                </div>
                <div className="skills">
                  <div className="skill-name">
                    <p>Machine Learning & Computer Vision</p>
                    <p>Expert</p>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
                    </div>
                  </div>
                  <div className="skill-name">
                    <p>Reinforcement Learning</p>
                    <p>Advanced</p>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}>
                    </div>
                  </div>
                  <div className="skill-name">
                    <p>Robotics (ROS, SLAM, Control, Simulation)</p>
                    <p>Advanced</p>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}>
                    </div>
                  </div>
                  <div className="skill-name">
                    <p>DevOps & Cloud (AWS, GCP)</p>
                    <p>Advanced</p>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
                    </div>
                  </div>
                  <div className="skill-name">
                    <p>IoT & Embedded Systems</p>
                    <p>Intermediate</p>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Skills Showcase Start */}
      <div className="skills-showcase" id="skills">
        <div className="container">
          <header className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
            <p>Technical Expertise</p>
            <h2>Skills & Technologies</h2>
          </header>
          <div className="row">
            {/* Robotics & Automation */}
            <div className="col-md-4 col-sm-6 mb-4 wow fadeInUp" data-wow-delay="0.1s">
              <div className="skill-card">
                <div className="skill-icon">
                  <i className="fas fa-robot"></i>
                </div>
                <h4>Robotics & Automation</h4>
                <div className="skill-tags">
                  <span className="badge">ROS</span>
                  <span className="badge">MuJoCo</span>
                  <span className="badge">Gazebo</span>
                  <span className="badge">MoveIt</span>
                  <span className="badge">SLAM</span>
                  <span className="badge">Navigation</span>
                  <span className="badge">Sensor Fusion</span>
                  <span className="badge">Isaac Sim</span>
                </div>
              </div>
            </div>

            {/* AI & Machine Learning */}
            <div className="col-md-4 col-sm-6 mb-4 wow fadeInUp" data-wow-delay="0.2s">
              <div className="skill-card">
                <div className="skill-icon">
                  <i className="fas fa-brain"></i>
                </div>
                <h4>AI & Machine Learning</h4>
                <div className="skill-tags">
                  <span className="badge">PyTorch</span>
                  <span className="badge">TensorFlow</span>
                  <span className="badge">Deep Learning</span>
                  <span className="badge">RL</span>
                  <span className="badge">Neural Networks</span>
                  <span className="badge">Transfer Learning</span>
                </div>
              </div>
            </div>

            {/* Computer Vision */}
            <div className="col-md-4 col-sm-6 mb-4 wow fadeInUp" data-wow-delay="0.3s">
              <div className="skill-card">
                <div className="skill-icon">
                  <i className="fas fa-eye"></i>
                </div>
                <h4>Computer Vision</h4>
                <div className="skill-tags">
                  <span className="badge">OpenCV</span>
                  <span className="badge">Object Detection</span>
                  <span className="badge">Segmentation</span>
                  <span className="badge">3D Vision</span>
                  <span className="badge">Point Clouds</span>
                  <span className="badge">YOLO</span>
                </div>
              </div>
            </div>

            {/* NLP */}
            <div className="col-md-4 col-sm-6 mb-4 wow fadeInUp" data-wow-delay="0.4s">
              <div className="skill-card">
                <div className="skill-icon">
                  <i className="fas fa-language"></i>
                </div>
                <h4>Natural Language Processing</h4>
                <div className="skill-tags">
                  <span className="badge">LLMs</span>
                  <span className="badge">Transformers</span>
                  <span className="badge">RAG</span>
                  <span className="badge">Chatbots</span>
                  <span className="badge">BERT</span>
                  <span className="badge">GPT</span>
                </div>
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div className="col-md-4 col-sm-6 mb-4 wow fadeInUp" data-wow-delay="0.5s">
              <div className="skill-card">
                <div className="skill-icon">
                  <i className="fas fa-cloud"></i>
                </div>
                <h4>Cloud & DevOps</h4>
                <div className="skill-tags">
                  <span className="badge">AWS</span>
                  <span className="badge">Docker</span>
                  <span className="badge">Git</span>
                  <span className="badge">CI/CD</span>
                  <span className="badge">Linux</span>
                  <span className="badge">Kubernetes</span>
                </div>
              </div>
            </div>

            {/* Programming */}
            <div className="col-md-4 col-sm-6 mb-4 wow fadeInUp" data-wow-delay="0.6s">
              <div className="skill-card">
                <div className="skill-icon">
                  <i className="fas fa-code"></i>
                </div>
                <h4>Programming Languages</h4>
                <div className="skill-tags">
                  <span className="badge">Python</span>
                  <span className="badge">C++</span>
                  <span className="badge">JavaScript</span>
                  <span className="badge">MATLAB</span>
                  <span className="badge">SQL</span>
                  <span className="badge">Bash</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Skills Showcase End */}

      {/* Experience Start */}
      <div className="experience" id="experience">
        <div className="container">
          <header className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
            <p>My Professional Journey</p>
            <h2>Experience & Research</h2>
          </header>
          <div className="timeline">
            <div className="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
              <div className="timeline-text">
                <div className="timeline-date">Jun 2025 - Present</div>
                <h2>Researcher</h2>
                <h4>RISE Lab, Arizona State University</h4>
                <p>
                  <ul>
                    <li>Engineered automated ROS + Python data acquisition pipeline synchronizing high-frequency pneumatic
                      pressure streams (100+ Hz) with motion-capture trajectories, eliminating manual preprocessing and
                      accelerating analysis workflows by 60% for downstream control modeling.</li>
                    <li>Decoded complex system dynamics through MATLAB/Python signal analysis, uncovering critical temporal
                      dependencies and non-linear transients that directly shaped feature engineering strategies for
                      closed-loop pneumatic controllers.</li>
                    <li>Spearheaded baseline control model development using regularized linear regression with GridSearchCV
                      hyperparameter optimization, achieving 7% improvement in predictive accuracy over existing approaches
                      and establishing performance benchmarks for the research team.</li>
                    <li>Orchestrated cross-institutional collaboration with Virginia Tech researchers, pioneering advanced
                      nonlinear control strategies including AutoTS forecasting, LSTM neural controllers, and policy-gradient
                      RL that enhanced system stability by 12% in dynamic pressure scenarios.</li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="timeline-item right wow slideInRight" data-wow-delay="0.1s">
              <div className="timeline-text">
                <div className="timeline-date">Sep 2024 - Jun 2025</div>
                <h2>Research Aide</h2>
                <h4>IDEA Lab, Arizona State University</h4>
                <p>
                  <ul>
                    <li>Architected multi-modal sensor fusion system for quadruped robot, synchronizing IMU, camera, and LiDAR
                      data streams through ROS 2 middleware and implementing Extended Kalman Filtering to achieve
                      centimeter-level
                      pose accuracy and sub-5% velocity estimation error for stable locomotion.</li>
                    <li>Designed physics-accurate MuJoCo simulation environment and trained Proximal Policy Optimization (PPO)
                      reinforcement learning agents to master three distinct quadruped gaits—walking, pacing, and
                      trotting—reducing
                      training time by 40% through parallelized environment rollouts.</li>
                    <li>Bridged the sim-to-real gap by successfully transferring learned locomotion policies to physical
                      hardware,
                      then developed intuitive Flask web interface enabling researchers to visualize real-time robot state and
                      dynamically tune 8+ gait parameters, cutting experiment iteration cycles from hours to minutes.</li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
              <div className="timeline-text">
                <div className="timeline-date">Aug 2023 - Jan 2024</div>
                <h2>Machine Learning Engineer</h2>
                <h4>Jupiter AI Labs (Freelance)</h4>
                <p>
                  <b>Lawn AI:</b>
                  <ul>
                    <li>Transformed property assessment workflows by productionizing end-to-end YOLOv8 instance segmentation
                      pipeline that processes Regrid API satellite imagery, deployed as production-grade Flask REST API on
                      AWS with S3 integration, JWT authentication, and comprehensive error handling serving 500+ daily
                      requests.</li>
                    <li>Curated and augmented dataset of 1,700+ satellite images with precise boundary annotations, training
                      custom YOLOv8 model that achieved 95% segmentation accuracy and &gt;90% precision in extracting property
                      boundaries—outperforming baseline approaches by 23%.</li>
                    <li>Engineered geometric algorithms for square-footage calculation from segmented polygons, delivering
                      &lt;15% mean absolute error that enabled accurate lawn area estimation critical for client pricing
                      models.</li>
                  </ul><br />
                  <b>Honey Bot:</b>
                  <ul>
                    <li>Architected intelligent health assistant by integrating Rasa conversational AI framework with GPT-3.5
                      for contextual query understanding, handling 1,000+ health-related conversations weekly with 92% user
                      satisfaction ratings.</li>
                    <li>Implemented semantic search infrastructure using ChromaDB vector database for clinic recommendations,
                      incorporating RAG (Retrieval-Augmented Generation) with content filtering guardrails that reduced
                      inappropriate responses by 98% while maintaining personalized, context-aware assistance.</li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="timeline-item right wow slideInRight" data-wow-delay="0.1s">
              <div className="timeline-text">
                <div className="timeline-date">Sep 2022 - Dec 2022</div>
                <h2>Machine Learning Intern</h2>
                <h4>Jupiter AI Labs</h4>
                <p>
                  <b>Real-Time Cargo Detection & Counting:</b>
                  <ul>
                    <li>Developed computer vision system for maritime logistics, leveraging Detectron2 instance segmentation
                      to detect, track, and enumerate cargo containers being undocked from vessels in real-time video streams,
                      achieving 65% baseline accuracy on challenging scenarios with occlusions and varying lighting
                      conditions.</li>
                    <li>Enhanced tracking robustness by implementing multi-object tracking algorithms with motion prediction,
                      boosting cargo count accuracy by 25% and reducing false positives through temporal consistency filtering
                      across 300+ video frames.</li>
                  </ul>
                  <b>Development & Testing for UpGrad:</b>
                  <ul>
                    <li>Crafted comprehensive machine learning curriculum by designing 50+ hands-on coding exercises spanning
                      Flask/FastAPI development, data preprocessing pipelines, model training workflows, hyperparameter
                      optimization, and visualization techniques—achieving &gt;85% automated grading accuracy through robust test
                      cases.</li>
                    <li>Championed software quality by implementing pytest test suites with ~95% code coverage, integrating
                      continuous testing workflows that caught edge cases and ensured exercise reliability for 1,000+
                      students.</li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
              <div className="timeline-text">
                <div className="timeline-date">Aug 2021 - Nov 2021</div>
                <h2>Data Science Intern</h2>
                <h4>Incipient Technologies Pvt. Ltd.</h4>
                <p>
                  <ul>
                    <li>Delivered high-stakes computer vision solutions for confidential client projects, implementing custom
                      object detection models using transfer learning and data augmentation techniques that consistently
                      achieved ~95% accuracy on proprietary datasets while maintaining strict confidentiality protocols.</li>
                    <li>Collaborated cross-functionally with web development team to enhance user interfaces, optimizing
                      frontend performance and implementing responsive design patterns that improved site usability scores
                      by 30% based on user testing feedback.</li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="timeline-item right wow slideInRight" data-wow-delay="0.1s">
              <div className="timeline-text">
                <div className="timeline-date">Sep 2020 - Dec 2020</div>
                <h2>Backend Development Intern</h2>
                <h4>DigiLocker (Govt. of India)</h4>
                <p>
                  <b>Name Match Algorithm:</b>
                  <ul>
                    <li>Engineered robust name-matching Flask REST API for government identity verification system, combining
                      fuzzy string matching with Soundex phonetic algorithms to handle name variations across Indian
                      languages,
                      achieving &gt;93% accuracy validated through rigorous unit testing on 10,000+ real-world name pairs.</li>
                  </ul>
                  <b>Real vs. Fake Face Detection:</b>
                  <ul>
                    <li>Built anti-spoofing liveness detection model using deep learning to distinguish authentic faces from
                      photos/masks/videos in real-time authentication flows, achieving &gt;0.95 precision and &gt;0.92 recall that
                      significantly enhanced security for India's national digital locker platform serving 100M+ users.</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Job Experience End */}

      {/* Volunteering Start */}
      <div className="experience" id="volunteering">
        <div className="container">
          <header className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
            <p>Community Engagement</p>
            <h2>Volunteering & Community Work</h2>
          </header>
          <div className="timeline">
            <div className="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
              <div className="timeline-text">
                <div className="timeline-date">Current</div>
                <h2>Student Volunteer</h2>
                <h4>ASU International Students & Scholars Center (ISSC)</h4>
                <p>
                  <ul>
                    <li>Orchestrated logistics for 15+ multicultural events serving 500+ international students, collaborating
                      with volunteer teams across planning phases and day-of execution to ensure seamless event experiences
                      that fostered cross-cultural connections.</li>
                    <li>Served as primary point of contact during events, proactively addressing attendee inquiries,
                      disseminating event schedules, and efficiently managing registration workflows that processed 100+
                      check-ins per event with zero wait-time complaints.</li>
                    <li>Optimized event operations by coordinating setup/teardown logistics, managing material distribution,
                      and refining space layouts based on crowd flow observations—improvements that reduced setup time by 25%
                      and enhanced attendee satisfaction ratings.</li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="timeline-item right wow slideInRight" data-wow-delay="0.1s">
              <div className="timeline-text">
                <div className="timeline-date">Community Work</div>
                <h2>Community Empowerment</h2>
                <h4>Rural Areas, India</h4>
                <p>
                  <ul>
                    <li>Spearheaded digital literacy initiative in 8+ government schools, conducting interactive workshops
                      on digital payments and online safety that equipped 300+ students with essential technology skills,
                      bridging the urban-rural digital divide.</li>
                    <li>Mobilized rural communities around environmental sustainability by leading grassroots campaigns for
                      proper waste segregation and disposal, establishing 5+ community collection points that reduced
                      improper waste disposal by an estimated 40%.</li>
                    <li>Championed water conservation awareness through village-level presentations and hands-on
                      demonstrations,
                      educating 500+ residents on rainwater harvesting and greywater management practices that promote
                      long-term
                      environmental stewardship in water-scarce regions.</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Volunteering End */}

      {/* Portfolio Start */}
      <div className="portfolio" id="portfolio">
        <div className="container">
          <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
            <p>My Portfolio</p>
            <h2>Explore My Personal Projects</h2>
          </div>
          <div className="row">
            <div className="col-12">
              <ul id="portfolio-filter">
                <li data-filter="*" className="filter-active">All</li>
                <li data-filter=".filter-1">Robotics</li>
                <li data-filter=".filter-2">Generative AI</li>
                <li data-filter=".filter-3">IoT</li>
                <li data-filter=".filter-4">NLP</li>
              </ul>
            </div>
          </div>
          <div className="row portfolio-container">
            <div className="col-lg-6 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp" data-wow-delay="0.0s">
              <div className="portfolio-wrap">
                <div className="portfolio-img">
                  <img src="/images/portfolio-5.jpg" alt="Portfolio Item Image" />
                </div>
                <div className="portfolio-text">
                  <h3>Fusion Robotics: Quadruped-UR5 Testbed</h3>
                  <a className="btn" style={{ 'margin': '3px' }} href="https://ras598-2025-s-team01.github.io" title="Project Website">
                    <i className="fas fa-external-link-alt" style={{ 'fontSize': '25px' }}></i>
                  </a>
                  <a className="btn" style={{ 'margin': '3px' }} href="https://ras598-2025-s-team01.github.io" title="MORE Showcase">
                    <i className="fas fa-trophy" style={{ 'fontSize': '25px' }}></i>
                  </a>
                  <a className="btn" style={{ 'margin': '3px' }}
                    href="https://forge.engineering.asu.edu/participant/hebbal-manjunath-jeevan/"
                    title="Innovation Showcase">
                    <i className="fas fa-award" style={{ 'fontSize': '25px' }}></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 portfolio-item filter-2 wow fadeInUp" data-wow-delay="0.3s">
              <div className="portfolio-wrap">
                <div className="portfolio-img">
                  <img src="/images/portfolio-8.jpg" alt="Portfolio Item Image" />
                </div>
                <div className="portfolio-text">
                  <h3>VocaLift - Best Hack for Social Good</h3>
                  <a className="btn" style={{ 'margin': '3px' }} href="https://devpost.com/software/vocalift" title="MORE Showcase">
                    <i className="fas fa-trophy" style={{ 'fontSize': '25px' }}></i>
                  </a>
                  <a className="btn" href="https://github.com/Jeevan-HM/VocaLift"> <i className="fas fa-external-link-alt"
                    style={{ 'fontSize': '25px' }}></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp" data-wow-delay="0.1s">
              <div className="portfolio-wrap">
                <div className="portfolio-img">
                  <img src="/images/portfolio-7.jpg" alt="Portfolio Item Image" />
                </div>
                <div className="portfolio-text">
                  <h3>Nav-Fusion: TurtleBot4 Navigation</h3>
                  <a className="btn" href="https://forge.engineering.asu.edu/participant/hebbal-manjunath-jeevan/"> <i
                    className="fas fa-external-link-alt" style={{ 'fontSize': '25px' }}></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp" data-wow-delay="0.2s">
              <div className="portfolio-wrap">
                <div className="portfolio-img">
                  <img src="/images/portfolio-6.jpg" alt="Portfolio Item Image" />
                </div>
                <div className="portfolio-text">
                  <h3>Drift-Reduced Semantic Visual Odometry</h3>
                  <a className="btn" href="https://github.com/Jeevan-HM/VOCSegmentation"> <i className="fas fa-external-link-alt"
                    style={{ 'fontSize': '25px' }}></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 portfolio-item filter-2 wow fadeInUp" data-wow-delay="0.3s">
              <div className="portfolio-wrap">
                <div className="portfolio-img">
                  <img src="/images/portfolio-1.jpg" alt="Portfolio Item Image" />
                </div>
                <div className="portfolio-text">
                  <h3>Podify AI</h3>
                  <a className="btn" href="https://github.com/Jeevan-HM/AI-podcast"> <i className="fas fa-external-link-alt"
                    style={{ 'fontSize': '25px' }}></i></a>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 portfolio-item filter-2 filter-4 wow fadeInUp" data-wow-delay="0.4s">
              <div className="portfolio-wrap">
                <div className="portfolio-img">
                  <img src="/images/portfolio-2.jpg" alt="Portfolio Item Image" />
                </div>
                <div className="portfolio-text">
                  <h3>FinBot Assistant</h3>
                  <a className="btn" href="https://github.com/Jeevan-HM/FinBot"> <i className="fas fa-external-link-alt"
                    style={{ 'fontSize': '25px' }}></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 portfolio-item filter-2 filter-3 filter-4 wow fadeInUp"
              data-wow-delay="0.5s">
              <div className="portfolio-wrap">
                <div className="portfolio-img">
                  <img src="/images/portfolio-3.jpg" alt="Portfolio Item Image" />
                </div>
                <div className="portfolio-text">
                  <h3>WellnessHub</h3>
                  <a className="btn" href="https://github.com/Jeevan-HM/Health-Analyzing-Service"> <i
                    className="fas fa-external-link-alt" style={{ 'fontSize': '25px' }}></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 portfolio-item filter-3 wow fadeInUp" data-wow-delay="0.6s">
              <div className="portfolio-wrap">
                <div className="portfolio-img">
                  <img src="/images/portfolio-4.jpg" alt="Portfolio Item Image" />
                </div>
                <div className="portfolio-text">
                  <h3>ShopDash</h3>
                  <a className="btn" href="https://github.com/Jeevan-HM/Automated-Shopping-Cart"> <i
                    className="fas fa-external-link-alt" style={{ 'fontSize': '25px' }}></i></a>
                </div>
              </div>
            </div>
          </div>
          <a href="https://github.com/Jeevan-HM" className="more btn">See more</a>
        </div>
      </div>
      {/* Portfolio End */}


      {/* Testimonial Start */}
      <div className="testimonial wow fadeInUp" data-wow-delay="0.1s" id="review">
        <div className="container">
          <div className="testimonial-icon">
            <i className="fa fa-quote-left"></i>
          </div>
          <div className="owl-carousel testimonials-carousel">
            <div className="testimonial-item">
              <div className="testimonial-img">
                <img src="/images/testimonial-1.jpg" alt="Portfolio Item Image" />
              </div>
              <div className="testimonial-text">
                <p>
                  Jeevan exhibits exceptional learning abilities and consistently delivers outstanding performance, both as
                  an individual contributor and a valuable team player. Additionally, he possesses strong technical and
                  analytical skills.
                </p>
                <h3>Ajit Kumar</h3>
                <h4>Sr. Software Developer <i>@Digilocker</i></h4>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="testimonial-img">
                <img src="/images/testimonial-2.jpg" alt="Portfolio Item Image" />
              </div>
              <div className="testimonial-text">
                <p>
                  Jeevan was prompt towards his work and had completed all his tasks on time. He is quick learner and was
                  eager to learn new concepts and skills during the internship period.
                </p>
                <h3>Rushikesh Dongaonkar Patil </h3>
                <h4>Founder Director <i>@Incipient Technologies Private Limited</i></h4>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="testimonial-img">
                <img src="/images/testimonial-3.jpg" alt="Portfolio Item Image" />
              </div>
              <div className="testimonial-text">
                <p>
                  Jeevan excelled as an intern at Digilocker, specializing in machine learning for liveliness detection.
                  His
                  model efficiently distinguishes between live and fake photos using a single image, eliminating the need
                  for video capture. Jeevan's conceptual strength in AI and timely task delivery were valuable
                  contributions
                  during his internship.
                </p>
                <h3>MOORCHHANA PATTANAIK</h3>
                <h4>Software Developer <i>@DigiLocker</i>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}

      {/* Publications Start */}
      <div className="publications" id="publications">
        <div className="container">
          <header className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
            <p>Research Contributions</p>
            <h2>Publications & Papers</h2>
          </header>
          <div className="row">
            <div className="col-lg-6 mb-4 wow fadeInLeft" data-wow-delay="0.1s">
              <div className="publication-card">
                <div className="pub-icon">
                  <i className="fas fa-file-alt"></i>
                </div>
                <div className="pub-content">
                  <h4>Pneumatic Control Systems for Soft Robotics</h4>
                  <p className="pub-venue">RISE Lab, Arizona State University</p>
                  <p className="pub-description">
                    Research on data-driven control strategies for pneumatic actuators in soft robotic systems, focusing
                    on
                    real-time pressure regulation and trajectory tracking using reinforcement learning approaches.
                  </p>
                  <div className="pub-tags">
                    <span className="tag">Soft Robotics</span>
                    <span className="tag">Control Systems</span>
                    <span className="tag">RL</span>
                  </div>
                  <div className="pub-status">
                    <span className="status-badge ongoing">Ongoing Research</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-4 wow fadeInRight" data-wow-delay="0.2s">
              <div className="publication-card">
                <div className="pub-icon">
                  <i className="fas fa-robot"></i>
                </div>
                <div className="pub-content">
                  <h4>Multi-Agent Reinforcement Learning for Quadruped Locomotion</h4>
                  <p className="pub-venue">IDEA Lab, Arizona State University</p>
                  <p className="pub-description">
                    Investigating decentralized learning strategies for quadruped robot coordination, implementing
                    hierarchical control architectures that bridge simulation and real-world deployment challenges.
                  </p>
                  <div className="pub-tags">
                    <span className="tag">Multi-Agent RL</span>
                    <span className="tag">Quadruped</span>
                    <span className="tag">Sim-to-Real</span>
                  </div>
                  <div className="pub-status">
                    <span className="status-badge ongoing">Ongoing Research</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-4 wow fadeInLeft" data-wow-delay="0.3s">
              <div className="publication-card">
                <div className="pub-icon">
                  <i className="fas fa-microchip"></i>
                </div>
                <div className="pub-content">
                  <h4>IoT-Based Smart Agriculture System</h4>
                  <p className="pub-venue">Undergraduate Research, VTU</p>
                  <p className="pub-description">
                    Developed an integrated IoT platform for precision agriculture combining sensor networks, automated
                    irrigation control, and predictive analytics for crop health monitoring.
                  </p>
                  <div className="pub-tags">
                    <span className="tag">IoT</span>
                    <span className="tag">Agriculture</span>
                    <span className="tag">Embedded Systems</span>
                  </div>
                  <div className="pub-status">
                    <span className="status-badge published">Published</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-4 wow fadeInRight" data-wow-delay="0.4s">
              <div className="publication-card">
                <div className="pub-icon">
                  <i className="fas fa-satellite"></i>
                </div>
                <div className="pub-content">
                  <h4>Computer Vision for Satellite Image Analysis</h4>
                  <p className="pub-venue">Industry Research, AWS ML Solutions Lab</p>
                  <p className="pub-description">
                    Production-grade computer vision service for automated analysis of satellite imagery, processing
                    1,700+
                    images with advanced segmentation and classification models achieving 95% accuracy.
                  </p>
                  <div className="pub-tags">
                    <span className="tag">Computer Vision</span>
                    <span className="tag">Satellite Imagery</span>
                    <span className="tag">AWS</span>
                  </div>
                  <div className="pub-status">
                    <span className="status-badge deployed">Industry Deployed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Publications End */}

      {/* Blog Start */}
      <div className="blog" id="blog">
        <div className="container">
          <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
            <i></i>
            <p>My Publications</p>
            <h2>My Latest Articles</h2>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="blog-item wow fadeInUp" data-wow-delay="0.2s">
                <div className="blog-img">
                  <img src="/images/blog-3.jpg" alt="Blog" />
                </div>
                <div className="blog-text">
                  <h2>Code Crafted</h2>
                  <div className="blog-meta">
                    <p><i className="far fa-user"></i>Admin</p>
                    <p><i className="far fa-list-alt"></i>IoT</p>
                    <p><i className="far fa-calendar-alt"></i>August 2022</p>
                  </div>
                  <p>
                    Welcome to Code Crafted, your go-to destination for a deep dive into the dynamic world of artificial
                    intelligence! Immerse yourself in our blog where we channel our enthusiasm for AI and its
                    ever-evolving
                    landscape. Intrigued by the swift strides in this field, we are committed to delivering insightful
                    content that not only explores the latest technologies but also delves into the pivotal research
                    papers
                    that have played a groundbreaking role in propelling AI forward. Join us on this journey as we unravel
                    the intricacies of cutting-edge advancements and showcase the driving forces shaping the future of
                    artificial intelligence.
                  </p>
                  <a className="btn btn-read-more"
                    href="https://www.notion.so/researchpaper101/Code-Crafted-Blogs-b02fa4f8fed94e23b41850140c3a8b71?pvs=4">Read
                    More <i className="fa fa-angle-right"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-item wow fadeInUp" data-wow-delay="0.4s">
                <div className="blog-img">
                  <img src="/images/blog-1.jpg" alt="Blog" />
                </div>
                <div className="blog-text">
                  <h2>Automated Shopping Cart</h2>
                  <div className="blog-meta">
                    <p><i className="far fa-user"></i>Admin</p>
                    <p><i className="far fa-list-alt"></i>IoT</p>
                    <p><i className="far fa-calendar-alt"></i>August 2022</p>
                  </div>
                  <p>
                    This system aims to streamline the checkout process in shopping centers by using a smart shopping
                    cart.
                    The cart displays the total price of the items in real-time, allowing customers to plan their budget
                    effectively. Instead of traditional scanning at the counter, the cart has a barcode scanner and a
                    touchscreen display for product information and payment processing. Customers can either pay directly
                    at
                    the cart using a generated UPI QR code or at a designated counter, reducing wait times and potential
                    errors at the billing counter. This automated approach enhances efficiency and improves the overall
                    shopping experience.
                  </p>
                  <a className="btn btn-read-more"
                    href="https://www.researchgate.net/publication/362900257_Automated_Shopping_Cart">Read More <i
                      className="fa fa-angle-right"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-item wow fadeInUp" data-wow-delay="0.6s">
                <div className="blog-img">
                  <img src="/images/blog-2.jpg" alt="Blog" />
                </div>
                <div className="blog-text">
                  <h2>Health Monitoring System</h2>
                  <div className="blog-meta">
                    <p><i className="far fa-user"></i>Admin</p>
                    <p><i className="far fa-list-alt"></i>Gen AI, IoT</p>
                    <p><i className="far fa-calendar-alt"></i>April 2023</p>
                  </div>
                  <p>
                    This service simplifies health tracking and improvement. Integrated with a smartwatch, it monitors
                    real-time health metrics like heart rate, oxygen saturation, and body temperature. This enables
                    precise
                    and personalized health recommendations. The service identifies potential health risks, offering
                    tailored suggestions, such as stress-reducing activities for elevated heart rates or sleep improvement
                    strategies. Beyond smartwatch features, it includes personalized meal plans, workouts, and medication
                    guidance. Accessible to everyone, it addresses diverse health needs, from athletes optimizing
                    performance to busy parents seeking balance. Empowering users to proactively manage their health, the
                    service contributes to longer, healthier lives.
                  </p>
                  <a className="btn btn-read-more"
                    href="https://www.researchgate.net/publication/370410962_SMART_HEALTH_MONITORING_AND_ANALYZING_SERVICE">Read
                    More <i className="fa fa-angle-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blog End */}

      {/* Contact Start */}
      <div id="contact">
        <div className="container-fluid">
          <div className="container">
            <div id="contact-row">
              <div className="contact-left">
                <h1 className="contact-me"><i className="contact-book fas fa-solid fa-address-book"></i>Contact Me</h1>
                <div className="contact-info">
                  <h2>Jeevan Hebbal Manjunath</h2>
                  <div className="contact-menu">
                    <p><a href="#" className="contact-link"></a>Tempe, AZ, USA</p>
                    <p><i className="fas fa-solid fa-phone"></i><a href="tel:+1 (415) 214-4572" className="contact-link">+1 (415)
                      214-4572</a></p>
                    <p><i className="fas fa-paper-plane"></i><a href="mailto:jeevanhm308@gmail.com"
                      className="contact-link">jeevanhm308@gmail.com</a></p>
                  </div>
                  <div className="contact-social">
                    <a href="https://twitter.com/Jeevan_H_M"><i className="fab fa-twitter"></i></a>
                    <a href="https://github.com/Jeevan-HM"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/jeevan-h-m-7ba7b5182/"><i className="fab fa-linkedin-in"></i></a>
                    <a href="https://www.youtube.com/@jeevanhm3872"><i className="fab fa-youtube"></i></a>
                    <br />
                  </div>
                  <div className="read-more-btn">
                    <a href="https://drive.google.com/file/d/11z5UF0qiVZ__1u6kJolsSxHFQxd4qJEX/view?usp=sharing"
                      className="btn more download" download="Jeevan H M Resume">Download CV</a>
                  </div>
                </div>
              </div>
              <div className="contact-right">
                <form name="submit-to-google-sheet">
                  <input type="text" name="Name" placeholder="Your Name" required />
                  <input type="email" name="Email" placeholder="Your Email" required />
                  <input type="Subject" name="Subject" placeholder="Subject" required />
                  <textarea name="Message" rows={3} placeholder="Message"></textarea>
                  <div id="typing-system-container" className="read-more-btn">

                    <button type="submit" className="btn form-submit">Submit</button>
                    <span id="msg"></span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}

      {/* Chatbot Start */}
      <div className="container">
        <div className="chatbox">
          <div className="chatbox__support">
            <div className="chatbox__header">
              <div className="chatbox__image--header">
                <img src="https://img.icons8.com/color/48/000000/circled-user-male-skin-type-4--v1.png"
                  alt="Chatbot Profile Icon" />
              </div>
              <div className="chatbox__content--header">
                <h4 className="chatbox__heading--header">Chat support</h4>
                <p className="chatbox__description--header">Hi. My name is J.A.I.D. How can I help you?</p>
              </div>
              <button className="chatbox__close--header" aria-label="Close chat">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="chatbox__messages">
              <div></div>
            </div>
            <div className="chatbox__footer">
              <input type="text" placeholder="Write a message..." />
              <button className="btn chatbox__send--footer send__button">&#x27A4;</button>

            </div>
          </div>
          <div className="chatbox__button">
            <button><img src="/images/chatbox-icon.svg" /></button>
          </div>
        </div>
      </div>

      {/* Chatbot End */}

      {/* Back to top button */}
      <a href="#" className="btn back-to-top"><i className="fa fa-chevron-up"></i></a>


    </div>
  );
}
