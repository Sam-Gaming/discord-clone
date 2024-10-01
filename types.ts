import { Server as NetServer, Socket } from "net";
import { Server as ServerIOServer } from "socket.io";
import { NextApiResponse } from "next";
import { Member, Profile, Server } from "@prisma/client";

export type ServerWithMembersWithProfiles = Server & {
  members: (Member & { profile: Profile })[];
};

export type NextApiResponseServerIo = NextApiResponse & {
  socket: Socket & {
    server: NetServer & {
      io: ServerIOServer;
    };
  };
};
