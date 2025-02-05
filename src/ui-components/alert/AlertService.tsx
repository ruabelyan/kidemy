import { ArrowIcon } from "@/assets";
import { SubscriptionService } from "@/services";
import { AlertProps } from "./Alert";

class AlertService extends SubscriptionService<AlertProps> {
  success(alert: AlertProps) {
    super.publish({
      ...alert,
      icon: alert.icon || <ArrowIcon style={{ transform: "rotate(90deg)" }} />,
    });
  }

  warning(alert: AlertProps) {
    super.publish({
      ...alert,
      icon: alert.icon || <ArrowIcon style={{ transform: "rotate(90deg)" }} />,
    });
  }

  error(alert: AlertProps) {
    super.publish({
      ...alert,
      icon: alert.icon || <ArrowIcon style={{ transform: "rotate(90deg)" }} />,
    });
  }

  info(alert: AlertProps) {
    super.publish({
      ...alert,
      icon: alert.icon || <ArrowIcon style={{ transform: "rotate(90deg)" }} />,
    });
  }
}

export const alert = new AlertService();
