"use client";

import { IEvent } from "@/lib/mongodb/database/models/event.model";
import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import React from "react";
import Checkout from "./Checkout";

const CheckoutButton = ({ event }: { event: IEvent }) => {
  const { user } = useUser();
  const userId = user?.publicMetadata.userId as string;
  // const hasEventFinished = new Date(event.endDateTime) < new Date();

  return (
    <div>
      <>
        <SignedOut>
          <p>Necesitas iniciar sesión para poder comprar este evento.</p>
        </SignedOut>

        <SignedIn>
          <Checkout event={event} userId={userId} />
        </SignedIn>
      </>
    </div>
  );
};

export default CheckoutButton;
