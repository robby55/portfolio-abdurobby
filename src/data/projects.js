import iotMonitoring from '../assets/projects/iot-monitoring.png'
import productionStatus from '../assets/projects/production-status.png'
import warehouseScanner from '../assets/projects/warehouse-scanner.png'
import approvalSystem from '../assets/projects/approval-system.png'
import productionMonitoring from '../assets/projects/production-monitoring.png'
import companyProfile from '../assets/projects/company-profile.png'

const projects = [
  {
    id: 1,
    title: 'IoT Machine Monitoring System',
    category: 'IoT & Monitoring',
    categoryLabel: 'IOT & MONITORING',

    description:
      'Real-time production monitoring system that integrates Shelly IoT devices with production dashboards to monitor machine activity, operational performance, output, and production status.',

    features: [
      'Real-time machine activity monitoring',
      'Machine uptime and active rate monitoring',
      'Daily and monthly production output monitoring',
      'Machine operating rate analysis',
      'Production start frequency monitoring',
      'Production order status monitoring',
      'Overdue and upcoming order tracking',
      'Real-time IoT data integration',
    ],

    technologies: [
      'Laravel',
      'MQTT',
      'Redis',
      'Shelly IoT',
      'JavaScript',
      'Microsoft SQL Server',
    ],

    images: [
      iotMonitoring,
      productionStatus,
    ],
    icon: '⚙️',
  },

  {
    id: 2,
    title: 'Warehouse & QC Scanner System',
    category: 'Warehouse & Android',
    categoryLabel: 'WAREHOUSE & ANDROID',

    description:
      'Android-based warehouse and quality control scanning system integrated with web applications to support warehouse operations, inventory processes, and QC inspection.',

    features: [
      'Order picking process',
      'Inbound scanning',
      'Inventory scanning',
      'Repeat check process',
      'Ride scanning',
      'Quality control inspection',
    ],

    technologies: [
      'PHP',
      'Android',
      'JavaScript',
      'Microsoft SQL Server',
    ],

    images: [warehouseScanner],
    icon: '📱',
  },

  {
    id: 3,
    title: 'Internal Business Workflow & Approval System',
    category: 'Business Application',
    categoryLabel: 'BUSINESS APPLICATION',

    description:
      'Internal business system for managing document approvals, engineering workflows, and operational processes, with automated WhatsApp notifications integrated through the Mekari Qontak API.',

    features: [
      'Document approval workflow',
      'Engineering process approval',
      'Organizational hierarchy-based workflow',
      'Operational business processes',
      'Automated WhatsApp notifications',
      'Mekari Qontak API integration',
    ],

    technologies: [
      'PHP',
      'JavaScript',
      'Microsoft SQL Server',
      'REST API',
      'Mekari Qontak',
    ],

    images: [approvalSystem],
    icon: '📄',
  },

  {
    id: 4,
    title: 'Warehouse Shipping & Inventory Monitoring System',
    category: 'Warehouse Management',
    categoryLabel: 'WAREHOUSE MANAGEMENT',

    description:
      'Real-time warehouse monitoring dashboard for tracking scanned goods through the picking, preparation, and loading processes.',

    features: [
      'Real-time warehouse operation monitoring',
      'Tracking of picked, prepared, and loaded goods',
      'Daily shipping progress monitoring',
      'Warehouse loading progress dashboard',
      'Shipping area storage monitoring',
      'Operational dashboard for TV displays',
    ],

    technologies: [
      'Laravel',
      'JavaScript',
      'Microsoft SQL Server',
    ],

    images: [productionMonitoring],
    icon: '📦',
  },

  {
    id: 5,
    title: 'Company Profile Website',
    category: 'Web Application',
    categoryLabel: 'WEB APPLICATION',

    description:
      'Company profile website for presenting company information, products, services, news, and business content.',

    features: [
      'Company information management',
      'Product and service presentation',
      'News and article management',
      'Content management system',
      'Responsive web design',
      'CRUD-based content management',
    ],

    technologies: [
      'CodeIgniter',
      'PHP',
      'MySQL',
      'JavaScript',
    ],

    images: [companyProfile],
    icon: '🌐',
    liveUrl: 'https://paiho.co.id/',
    
  },
]


export default projects