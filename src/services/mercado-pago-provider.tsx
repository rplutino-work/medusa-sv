import { AbstractPaymentService, Cart, Data, Payment, PaymentSession, PaymentSessionStatus, TransactionBaseService } from "@medusajs/medusa"
import { EntityManager } from "typeorm";

class MercadoPagoProviderService extends AbstractPaymentService<TransactionBaseService> {
  protected manager_: EntityManager;
  protected transactionManager_: EntityManager;
  public static identifier = "Mercado pago";
  // public static is_installed = false;

  getPaymentData(paymentSession: PaymentSession): Promise<Data> {
    throw new Error("Method not implemented.");
  }
  updatePaymentData(paymentSessionData: Data, data: Data): Promise<Data> {
    throw new Error("Method not implemented.");
  }
  createPayment(cart: Cart): Promise<Data> {
    const axios = require("axios");
    const url = "https://api.mercadopago.com/checkout/preferences";

    const body = {
      payer_email: "test_user_74954034@testuser.com",
      items: [
        {
          title: "Dummy Title",
          description: "Dummy description",
          picture_url: "http://www.myapp.com/myimage.jpg",
          category_id: "category123",
          quantity: 1,
          unit_price: 10
        }
      ],
      back_urls: {
        failure: "/failure",
        pending: "/pending",
        success: "/success"
      }
    };

    const payment = axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
      }
    });

    return payment.data;
  }
  retrievePayment(paymentData: Data): Promise<Data> {
    throw new Error("Method not implemented.");
  }
  updatePayment(paymentSessionData: Data, cart: Cart): Promise<Data> {
    throw new Error("Method not implemented.");
  }
  authorizePayment(paymentSession: PaymentSession, context: Data): Promise<{ data: Data; status: PaymentSessionStatus; }> {
    throw new Error("Method not implemented.");
  }
  capturePayment(payment: Payment): Promise<Data> {
    throw new Error("Method not implemented.");
  }
  refundPayment(payment: Payment, refundAmount: number): Promise<Data> {
    throw new Error("Method not implemented.");
  }
  cancelPayment(payment: Payment): Promise<Data> {
    throw new Error("Method not implemented.");
  }
  deletePayment(paymentSession: PaymentSession): Promise<void> {
    throw new Error("Method not implemented.");
  }
  getStatus(data: Data): Promise<PaymentSessionStatus> {
    throw new Error("Method not implemented.");
  }

}

export default MercadoPagoProviderService;
