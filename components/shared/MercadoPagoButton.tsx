"use client";

import { IEvent } from "@/lib/mongodb/database/models/event.model";
import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import React from "react";
import CheckoutMercadoPago from "./CheckoutMercadoPago";

const MercadoPagoButton = ({ event }: { event: IEvent }) => {
  const { user } = useUser();
  const userId = user?.publicMetadata.userId as string;
  const hasEventFinished = new Date(event.endDateTime) < new Date();

  return (
    <div>
      {hasEventFinished ? (
        <p>This event has already finished</p>
      ) : (
        <>
          <SignedOut>
            <p>You need to be signed in to book this event</p>
          </SignedOut>

          <SignedIn>
            <CheckoutMercadoPago event={event} userId={userId} />
          </SignedIn>
        </>
      )}
    </div>
  );
};

export default MercadoPagoButton;
