import { strings } from "@/locales";
import {
  ComputerIcon,
  DeploymentAndLaunch,
  DevelopmentAndCoding,
  LaunchSupportAndOptimization,
  SearchIcon,
  Strategy,
  TestingAndQualityAssurance,
  WireframingAndPrototyping,
} from "../../public/images";

const processItems = [
  {
    image: SearchIcon,
    title: strings.discoveryAndPlanning,
    description: strings.ourTeamCollaborates,
  },
  {
    image: WireframingAndPrototyping,
    title: strings.wireframingAndPrototyping,
    description: strings.weCraftaSkeletal,
  },
  {
    image: ComputerIcon,
    title: strings.designAndUserExperience,
    description: strings.wePrioritizeAesthetics,
  },
  {
    image: DevelopmentAndCoding,
    title: strings.developmentAndCoding,
    description: strings.ourSkilledWebAndApp,
  },
  {
    image: TestingAndQualityAssurance,
    title: strings.testingAndQualityAssurance,
    description: strings.ourQaTeamIsKeen,
  },
  {
    image: DeploymentAndLaunch,
    title: strings.deploymentAndLaunch,
    description: strings.ourTeamHandlesAllTechnical,
  },
  {
    image: LaunchSupportAndOptimization,
    title: strings.PostLaunchSupportandOptimization,
    description: strings.WeContinuouslyMonitorPerformance,
  },
];
export { processItems };
